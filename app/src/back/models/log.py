from pydantic import BaseModel, Field
from datetime import datetime, timezone

class Log(BaseModel):
    """Représente une entrée de log"""
    message: str = Field(..., min_length=10, description="Contenu du log")
    level: str = Field(..., pattern="^(INFO|WARNING|ERROR|DEBUG)$", description="Niveau du log")
    service: str = Field(..., min_length=3, description="Nom du service")
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc), description="Horodatage ISO8601")
