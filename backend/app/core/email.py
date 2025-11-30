from __future__ import annotations

import logging
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

import aiosmtplib

from .config import get_settings

logger = logging.getLogger(__name__)


async def send_contact_notification(
    name: str,
    email: str,
    company: str | None = None,
    message: str | None = None,
    interests: list[str] | None = None,
) -> None:
    """Отправляет email уведомление о новой заявке с формы контакта."""
    settings = get_settings()

    if not settings.mail_list:
        logger.warning("MAIL_LIST не настроен, пропуск отправки email")
        return

    if not settings.smtp_host or not settings.smtp_user or not settings.smtp_password:
        logger.warning("SMTP настройки не заполнены, пропуск отправки email")
        return

    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"Новая заявка с сайта: {name}"
        msg["From"] = settings.smtp_from_email or settings.smtp_user
        msg["To"] = ", ".join(settings.mail_list)

        interests_text = ", ".join(interests) if interests else "Не указано"
        company_text = company if company else "Не указано"
        message_text = message if message else "Не указано"

        text_content = f"""Новая заявка с формы контакта

Имя: {name}
Email: {email}
Компания: {company_text}
Интересы: {interests_text}
Сообщение: {message_text}
"""

        html_content = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
        .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
        .header {{ background-color: #4F46E5; color: white; padding: 20px; border-radius: 5px 5px 0 0; }}
        .content {{ background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }}
        .field {{ margin-bottom: 15px; }}
        .label {{ font-weight: bold; color: #4F46E5; }}
        .value {{ margin-top: 5px; padding: 10px; background-color: white; border-radius: 4px; }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Новая заявка с формы контакта</h2>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Имя:</div>
                <div class="value">{name}</div>
            </div>
            <div class="field">
                <div class="label">Email:</div>
                <div class="value">{email}</div>
            </div>
            <div class="field">
                <div class="label">Компания:</div>
                <div class="value">{company_text}</div>
            </div>
            <div class="field">
                <div class="label">Интересы:</div>
                <div class="value">{interests_text}</div>
            </div>
            <div class="field">
                <div class="label">Сообщение:</div>
                <div class="value">{message_text}</div>
            </div>
        </div>
    </div>
</body>
</html>
"""

        msg.attach(MIMEText(text_content, "plain", "utf-8"))
        msg.attach(MIMEText(html_content, "html", "utf-8"))

        await aiosmtplib.send(
            msg,
            hostname=settings.smtp_host,
            port=settings.smtp_port,
            username=settings.smtp_user,
            password=settings.smtp_password,
            use_tls=True,
        )

        logger.info(f"Email уведомление отправлено для заявки от {name} ({email})")
    except Exception as exc:  # noqa: BLE001
        logger.error(f"Ошибка при отправке email уведомления: {exc}", exc_info=True)

