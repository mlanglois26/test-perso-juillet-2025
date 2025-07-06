all: up

up:
	docker compose -f ./docker/docker-compose.yml up

build:
	docker compose -f ./docker/docker-compose.yml build

rebuild:
	docker compose -f ./docker/docker-compose.yml build --no-cache

stop:
	docker compose -f ./docker/docker-compose.yml down

clean:
	docker compose -f ./docker/docker-compose.yml rm -f -v

fclean: clean
	docker compose -f ./docker/docker-compose.yml down -v
	docker compose -f ./docker/docker-compose.yml down --rmi all

prune:
	docker system prune -a

.PHONY: all up build rebuild stop clean fclean prune
