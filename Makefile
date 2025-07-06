all: build up

build:
	docker compose --env-file .env.example -f ./docker/docker-compose.yml build

up:
	docker compose --env-file .env.example -f ./docker/docker-compose.yml up

rebuild:
	docker compose --env-file .env.example -f ./docker/docker-compose.yml build --no-cache

stop:
	docker compose --env-file .env.example -f ./docker/docker-compose.yml down

clean:
	docker compose --env-file .env.example -f ./docker/docker-compose.yml rm -f -v

fclean: clean
	docker compose --env-file .env.example -f ./docker/docker-compose.yml down -v
	docker compose --env-file .env.example -f ./docker/docker-compose.yml down --rmi all

prune:
	docker system prune -a

.PHONY: all up build rebuild stop clean fclean prune
