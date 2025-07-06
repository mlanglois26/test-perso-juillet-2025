from pydantic import BaseModel, Field
from datetime import datetime, timezone

class Log(BaseModel):
    """Log"""
    message: str = Field(..., min_length=10, description="Message")
    level: str = Field(..., pattern="^(INFO|WARNING|ERROR|DEBUG)$", description="Level")
    service: str = Field(..., min_length=3, description="Service")
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc), description="Timestamp")
