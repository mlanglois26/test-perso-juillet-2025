from fastapi import APIRouter
from typing import Optional
from fastapi import Query
from src.back.models.log import Log
from src.back.controllers.logs import create_log
from src.back.controllers.logs import get_logs
from src.back.controllers.logs import search_logs

router = APIRouter()

# get last 20 logs
@router.get("/api/logs")
async def route_get_logs():
    return await get_logs()

#create log
@router.post("/api/log")
async def route_post_log(log: Log):
    return await create_log(log)

# search for logs
@router.get("/api/search")
async def route_search_logs(
    query: Optional[str] = Query(None),
    level: Optional[str] = Query(None),
    service: Optional[str] = Query(None)
):
    results = search_logs(query=query, level=level, service=service)
    return results
