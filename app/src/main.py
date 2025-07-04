# from fastapi import FastAPI


# app = FastAPI()

# @app.get("/")
# async def root():
#     return {"message": "Hello World"}



# @app.post("/logs")
# async def create_log(log: Log):
#     timestamp = datetime.now(timezone.utc).isoformat()
#     return {
#         "message": "Log reçu",
#         "data": log,
#         "timestamp": timestamp
#     }

from fastapi import FastAPI
from src.back.routes.logs import router as logs_router
from src.back.middleware.cors import setup_cors

app = FastAPI()

setup_cors(app)

app.include_router(logs_router)
