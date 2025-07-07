# from opensearchpy import OpenSearch

# client = OpenSearch(
#     hosts=[{"host": "opensearch-node", "port": 9200}],
#     http_auth=("admin", "admin"),
#     use_ssl=False,
#     verify_certs=False,
# )

# from opensearchpy import OpenSearch
# from dotenv import load_dotenv
# import os
# from pathlib import Path

# env_path = Path(__file__).resolve().parent.parent.parent / '.env.example'
# print('env_path = ', env_path)
# load_dotenv(dotenv_path=env_path)

# port = int(os.getenv('OPENSEARCH_PORT'))
# host = os.getenv('OPENSEARCH_HOST')
# username = os.getenv('OPENSEARCH_USER', 'admin')
# password = os.getenv('OPENSEARCH_PASSWORD', 'admin')

# client = OpenSearch(
#     hosts=[{"host": host, "port": port}],
#     http_auth=(username, password),
#     use_ssl=False,
#     verify_certs=False,
# )


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
