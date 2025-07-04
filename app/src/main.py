from fastapi import FastAPI
from src.back.routes.logs import router as logs_router
from src.back.middleware.cors import setup_cors

app = FastAPI()
setup_cors(app)
app.include_router(logs_router)

