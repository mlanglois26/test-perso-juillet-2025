from datetime import datetime, timezone
from src.back.models.log import Log
from src.back.opensearch.client import client

def set_index_name():
    return f"logs-{datetime.now(timezone.utc).strftime('%Y-%m-%d')}"

async def create_log(log: Log):
    index_name = set_index_name()
    response = client.index(index=index_name, body=log.dict(), refresh="wait_for")
    print("Index response:", response)
    return response

async def get_logs():
    results = []
    try:
        response = client.search(
            index="logs-*",
            body={
                "query": {"match_all": {}},
                "size": 20,
                "sort": [{"timestamp": {"order": "desc"}}]
            }
        )
        for hit in response["hits"]["hits"]:
            results.append(hit["_source"])
        return results
    except Exception as e:
        return {"error": str(e)}

def search_logs(query: str):
    response = client.search(
        index="logs-*",
        body={
            "query": {
                "multi_match": {
                    "query": query,
                    "fields": ["message", "service", "level"]
                }
            },
            "sort": [
                {"timestamp": {"order": "desc"}}
            ]
        }
    )
    return [hit["_source"] for hit in response["hits"]["hits"]]
