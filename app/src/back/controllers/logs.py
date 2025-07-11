from typing import Optional
from fastapi import Query
from datetime import datetime, timezone
from src.back.models.log import Log
from src.back.opensearch.client import client

def set_index_name():
    return f"logs-{datetime.now(timezone.utc).strftime('%Y-%m-%d')}"

async def create_log(log: Log):
    index_name = set_index_name()
    response = client.index(index=index_name, body=log.dict(), refresh="wait_for")
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

def search_logs(query: Optional[str] = None, level: Optional[str] = None, service: Optional[str] = None):
    should_clauses = []
    filter_clauses = []

    if query:
        should_clauses.append({
            "match": {"message": query}  # ou match_phrase_prefix pour plus de souplesse
        })

    if level:
        filter_clauses.append({
            "term": {
                "level.keyword": level.upper()
            }
        })

    if service:
        filter_clauses.append({
            "term": {"service.keyword": service}
        })

    body = {
        "query": {
            "bool": {
                "should": should_clauses,
                "filter": filter_clauses,
                "minimum_should_match": 1 if query else 0
            }
        },
        "sort": [{"timestamp": {"order": "desc"}}],
        "size": 1000 # taille arbitraire // je sais qu'a terme ce sera problématique puisque je post des logs mais avec un tout petit jeu de données j'ai fait au plus simple
    }

    response = client.search(index="logs-*", body=body)
    return [hit["_source"] for hit in response["hits"]["hits"]]
