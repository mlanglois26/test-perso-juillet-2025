from fastapi import FastAPI
from pydantic import BaseModel, Field
from datetime import datetime, timezone

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

class Log(BaseModel):
    """Représente une entrée de log"""
    message: str = Field(..., min_length=10, description="Contenu du log")
    level: str = Field(..., pattern="^(INFO|WARNING|ERROR|DEBUG)$", description="Niveau du log")
    service: str = Field(..., min_length=3, description="Nom du service")


@app.post("/logs")
async def create_log(log: Log):
    timestamp = datetime.now(timezone.utc).isoformat()
    return {
        "message": "Log reçu",
        "data": log,
        "timestamp": timestamp
    }
