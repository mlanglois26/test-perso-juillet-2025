from opensearchpy import OpenSearch

client = OpenSearch(
    hosts=[{"host": "opensearch-node", "port": 9200}],
    http_auth=("admin", "admin"),
    use_ssl=False,
    verify_certs=False,
)
