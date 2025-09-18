ITConsult Landing — FastAPI Backend

Запуск локально

1) Создать виртуальное окружение и установить зависимости:

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

2) Настроить переменные окружения (опционально):

```bash
cp .env.example .env
```

3) Запустить сервер:

```bash
uvicorn app.main:app --reload --port 8000
```

Маршруты

- GET /api/healthz — проверка живости
- GET /api/readyz — проверка готовности (доступна запись в data/)
- POST /api/contact — приём заявки, сохранение в JSONL (backend/data/contacts.jsonl)

Заметки

- FE dev сервер Vite (порт 3000) проксирует /api на http://localhost:8000.
- CORS настроен на http://localhost:3000.

