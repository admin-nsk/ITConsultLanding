from __future__ import annotations

import aiofiles
from datetime import datetime, timezone
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr, Field

from ...core.config import get_settings
from ...core.db import insert_site_request
from ...core.email import send_contact_notification


router = APIRouter(prefix="", tags=["contact"])


class ContactPayload(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    email: EmailStr
    phone: str | None = Field(default=None, max_length=50)
    message: str = Field(min_length=1, max_length=5000)
    source: str | None = Field(default=None, max_length=100)


@router.post("/contact", summary="Submit contact request")
async def submit_contact(payload: ContactPayload) -> dict:
    settings = get_settings()
    settings.ensure_data_dir_exists()

    record = {
        "ts": datetime.now(timezone.utc).isoformat(),
        "name": payload.name.strip(),
        "email": payload.email,
        "phone": payload.phone.strip() if payload.phone else None,
        "message": payload.message.strip(),
        "source": payload.source,
    }

    try:
        async with aiofiles.open(settings.contact_file_path, mode="a", encoding="utf-8") as f:
            # JSON Lines (одна запись на строку)
            import orjson  # локальный импорт для скорости

            line = orjson.dumps(record).decode("utf-8")
            await f.write(line + "\n")
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=500, detail=f"Failed to persist contact: {exc}") from exc

    return {"ok": True}


class FreeConsultPayload(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    phone: str = Field(min_length=5, max_length=50)
    email: EmailStr


@router.post("/v1/contacts/freeconsult", summary="Submit free consult request")
async def submit_free_consult(payload: FreeConsultPayload) -> dict:
    try:
        await insert_site_request(
            name=payload.name.strip(),
            phone=payload.phone.strip(),
            email=payload.email,
            type="freeconsult",
        )
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=500, detail=f"Failed to save request: {exc}") from exc
    return {"ok": True}


class ConsultPayload(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    email: EmailStr
    phone: str | None = Field(default=None, max_length=50)
    message: str | None = Field(default=None, max_length=5000)
    company: str | None = Field(default=None, max_length=200)
    interests: list[str] | None = None


@router.post("/v1/contacts/consult", summary="Submit contact consult request")
async def submit_consult(payload: ConsultPayload) -> dict:
    try:
        await insert_site_request(
            name=payload.name.strip(),
            phone=payload.phone.strip() if payload.phone else "",
            email=payload.email,
            type="consult",
            company=payload.company.strip() if payload.company else None,
            message=payload.message.strip() if payload.message else None,
            interests=",".join(payload.interests) if payload.interests else None,
        )
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=500, detail=f"Failed to save request: {exc}") from exc

    try:
        await send_contact_notification(
            name=payload.name.strip(),
            email=payload.email,
            company=payload.company.strip() if payload.company else None,
            message=payload.message.strip() if payload.message else None,
            interests=payload.interests,
        )
    except Exception:  # noqa: BLE001
        pass

    return {"ok": True}


