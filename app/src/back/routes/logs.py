from fastapi import APIRouter
from src.back.models.log import Log
from src.back.controllers.logs import create_log
from src.back.opensearch.client import client
# from opensearchpy.helpers import scan

router = APIRouter()

@router.get("/logs")
async def get_logs():
    results = []
    try:
        response = client.search(index="logs-*", body={"query": {"match_all": {}}})
        for hit in response["hits"]["hits"]:
            results.append(hit["_source"])
        return results
    except Exception as e:
        return {"error": str(e)}


@router.post("/logs")
async def post_log(log: Log):
    return await create_log(log)

# @router.post("/logs")(create_log) faire un truc comme ca plus propre

@router.get("/search")
def search_logs(query: str):
    response = client.search(
        index="logs-*",
        body={
            "query": {
                "multi_match": {
                    "query": query,
                    "fields": ["message", "service", "level"]
                }
            }
        }
    )
    return [hit["_source"] for hit in response["hits"]["hits"]]
