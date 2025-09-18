VENV?=.venv
PY?=python3

venv:
	$(PY) -m venv $(VENV)
	. $(VENV)/bin/activate; pip install -U pip; pip install -r requirements.txt

run:
	. $(VENV)/bin/activate; uvicorn app.main:app --reload --port 8000

lint:
	. $(VENV)/bin/activate; python -m compileall -q app


