from datetime import datetime, timezone
from src.back.models.log import Log
from src.back.opensearch.client import client

# async def create_log(log: Log) -> dict:

#     return {
#         "message": "Log reçu",
#         "data": log
#     }

def set_index_name():
    return f"logs-{datetime.now(timezone.utc).strftime('%Y-%m-%d')}"

async def create_log(log: Log):
    index_name = set_index_name()
    response = client.index(index=index_name, body=log.dict())
    return response
