from __future__ import annotations

import os
from functools import lru_cache
from typing import List

from pydantic import BaseModel, field_validator


class Settings(BaseModel):
    app_name: str = "ITConsult Landing API"
    environment: str = os.getenv("ENVIRONMENT", "development")
    log_level: str = os.getenv("LOG_LEVEL", "INFO")

    api_prefix: str = os.getenv("API_PREFIX", "/api")

    cors_origins_raw: str = os.getenv("CORS_ORIGINS", "http://localhost:3000")
    cors_origins: List[str] = []

    data_dir: str = os.getenv("DATA_DIR", "backend/data")
    contact_file: str = os.getenv("CONTACT_FILE", "contacts.jsonl")
    sqlite_file: str = os.getenv("SQLITE_FILE", "site.db")

    @field_validator("cors_origins", mode="before")
    @classmethod
    def parse_cors_origins(cls, v: List[str] | str | None) -> List[str]:
        if v is None:
            return []
        if isinstance(v, list):
            return v
        return [item.strip() for item in v.split(",") if item.strip()]

    def ensure_data_dir_exists(self) -> None:
        if not os.path.isdir(self.data_dir):
            os.makedirs(self.data_dir, exist_ok=True)

    @property
    def contact_file_path(self) -> str:
        return os.path.join(self.data_dir, self.contact_file)

    @property
    def sqlite_db_path(self) -> str:
        return os.path.join(self.data_dir, self.sqlite_file)


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()


