from __future__ import annotations

import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .core.config import get_settings, Settings
from .core.db import init_db
from .api.routes.health import router as health_router
from .api.routes.contact import router as contact_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    settings: Settings = get_settings()

    # Логирование
    logging.basicConfig(level=getattr(logging, settings.log_level, logging.INFO))
    logging.getLogger("uvicorn").setLevel(getattr(logging, settings.log_level, logging.INFO))

    # Подготовка каталогов хранения
    settings.ensure_data_dir_exists()
    # Инициализация базы данных
    init_db()
    yield


def create_app() -> FastAPI:
    settings: Settings = get_settings()

    app = FastAPI(
        title=settings.app_name,
        version="1.0.0",
        lifespan=lifespan,
        docs_url=f"{settings.api_prefix}/docs",
        openapi_url=f"{settings.api_prefix}/openapi.json",
    )

    # CORS
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Routers
    app.include_router(health_router, prefix=settings.api_prefix)
    app.include_router(contact_router, prefix=settings.api_prefix)

    return app


app = create_app()

