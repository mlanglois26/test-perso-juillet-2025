import os
from dotenv import load_dotenv
from opensearchpy import OpenSearch

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '../../../../.env.example'))

host = os.getenv("OPENSEARCH_HOST")
port = int(os.getenv("OPENSEARCH_PORT"))
user = os.getenv("OPENSEARCH_USER")
password = os.getenv("OPENSEARCH_PASSWORD")

client = OpenSearch(
    hosts=[{"host": host, "port": port}],
    http_auth=(user, password),
    use_ssl=False,
    verify_certs=False,
)
