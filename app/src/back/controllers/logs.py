from src.back.models.log import Log

async def create_log(log: Log) -> dict:
   
    return {
        "message": "Log reçu",
        "data": log
    }
