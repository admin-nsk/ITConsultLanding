
Docker

Локальный запуск всего проекта (frontend + backend):

```bash
docker compose up --build
```

- Frontend: http://localhost:3000
- Backend (прямой доступ): http://localhost:8000
- API через фронтовый nginx: http://localhost:3000/api

Сборка по отдельности:

```bash
# Backend
docker build -t itconsult-landing-backend ./backend
docker run --rm -p 7000:7000 itconsult-landing-backend

# Frontend (nginx)
docker build -t itconsult-landing-frontend -f Dockerfile.frontend .
docker run --rm -p 3000:80 itconsult-landing-frontend
```

  # Landing Page Design

  This is a code bundle for Landing Page Design. The original project is available at https://www.figma.com/design/oac2MZ5bweSNRRO3bxL9cj/Landing-Page-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  