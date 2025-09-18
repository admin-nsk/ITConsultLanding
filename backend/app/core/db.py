from __future__ import annotations

import asyncio
import sqlite3
from datetime import datetime, timezone

from .config import get_settings


def _get_connection() -> sqlite3.Connection:
    settings = get_settings()
    settings.ensure_data_dir_exists()
    conn = sqlite3.connect(settings.sqlite_db_path, check_same_thread=False)
    conn.execute("PRAGMA journal_mode=WAL;")
    conn.execute("PRAGMA synchronous=NORMAL;")
    return conn


def init_db() -> None:
    conn = _get_connection()
    try:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS site_requests (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                phone TEXT NOT NULL,
                email TEXT NOT NULL,
                type TEXT NOT NULL,
                company TEXT,
                message TEXT,
                interests TEXT,
                created_at TEXT NOT NULL
            );
            """
        )
        # Для существующих БД добавим недостающие столбцы
        cur = conn.execute("PRAGMA table_info(site_requests);")
        existing_cols = {row[1] for row in cur.fetchall()}
        if "company" not in existing_cols:
            conn.execute("ALTER TABLE site_requests ADD COLUMN company TEXT;")
        if "message" not in existing_cols:
            conn.execute("ALTER TABLE site_requests ADD COLUMN message TEXT;")
        if "interests" not in existing_cols:
            conn.execute("ALTER TABLE site_requests ADD COLUMN interests TEXT;")
        conn.commit()
    finally:
        conn.close()


def _insert_site_request_sync(
    name: str,
    phone: str,
    email: str,
    type: str,
    *,
    company: str | None = None,
    message: str | None = None,
    interests: str | None = None,
) -> None:
    conn = _get_connection()
    try:
        ts = datetime.now(timezone.utc).isoformat()
        conn.execute(
            "INSERT INTO site_requests (name, phone, email, type, company, message, interests, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            (name, phone, email, type, company, message, interests, ts),
        )
        conn.commit()
    finally:
        conn.close()


async def insert_site_request(
    name: str,
    phone: str,
    email: str,
    type: str,
    *,
    company: str | None = None,
    message: str | None = None,
    interests: str | None = None,
) -> None:
    await asyncio.to_thread(
        _insert_site_request_sync,
        name,
        phone,
        email,
        type,
        company=company,
        message=message,
        interests=interests,
    )


