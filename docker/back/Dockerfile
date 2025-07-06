FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY ./src ./src

CMD uvicorn src.main:app --host ${HOST} --port ${BACKEND_PORT} --reload
