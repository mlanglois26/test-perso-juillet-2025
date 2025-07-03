all:
	docker compose -f ./docker/docker-compose.yml up

stop:
	docker compose -f ./docker/docker-compose.yml down

clean:
	docker compose -f ./docker/docker-compose.yml rm -f -v

fclean: clean
	docker compose -f ./docker/docker-compose.yml down -v
	docker compose -f ./docker/docker-compose.yml down --rmi all

prune:
	docker system prune -a

.PHONY: clean fclean stop all prune
