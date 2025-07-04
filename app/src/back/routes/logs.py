from fastapi import APIRouter
from src.back.models.log import Log
from src.back.controllers.logs import create_log

router = APIRouter()

@router.post("/logs")
async def post_log(log: Log):
    return await create_log(log)
