build:
	docker-compose build

run:
	docker-compose up -d

stop:
	docker-compose stop

down:
	docker-compose down

clear:
	docker container prune
