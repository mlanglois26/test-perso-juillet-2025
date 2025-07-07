import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '../../../../.env.example'))

url = os.getenv("FRONT_URL")

def setup_cors(app):
    origins = [
        url
    ]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

# Permet au navigateur du front d’appeler l’API back depuis une autre origine
# sinon erreur CORS
