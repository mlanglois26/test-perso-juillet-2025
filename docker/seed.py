from opensearchpy import OpenSearch
import datetime
import random
from faker import Faker
import time

fake = Faker()

client = OpenSearch("http://opensearch-node:9200")

for _ in range(20):
    try:
        if client.ping():
            print("OpenSearch is ready.")
            break
    except Exception:
        pass
    print("Waiting for Opensearch")
    time.sleep(3)
else:
    print("OpenSearch not responding")
    exit(1)

levels = ["INFO", "DEBUG", "WARNING", "ERROR"]
services = ["auth", "notifications", "user-service", "api-gateway"]

logs = []

for _ in range(35):
    log = {
        "message": fake.sentence(nb_words=6),
        "level": random.choice(levels),
        "service": random.choice(services),
        "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat()
    }
    logs.append(log)

index_name = f"logs-{datetime.date.today()}"

for log in logs:
    client.index(index=index_name, body=log)

print("✅ 35 logs insérés dans", index_name)
