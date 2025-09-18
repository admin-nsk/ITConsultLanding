from __future__ import annotations

from fastapi import APIRouter

from ...core.config import get_settings


router = APIRouter(tags=["health"])


@router.get("/healthz", summary="Liveness probe")
def healthz() -> dict:
    settings = get_settings()
    return {"status": "ok", "service": settings.app_name}


@router.get("/readyz", summary="Readiness probe")
def readyz() -> dict:
    settings = get_settings()
    try:
        settings.ensure_data_dir_exists()
        return {"status": "ready"}
    except Exception as exc:  # noqa: BLE001
        return {"status": "error", "detail": str(exc)}


