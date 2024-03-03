build:
	@echo "Building Docker containers..."
	docker compose build

up:
	@echo "Starting Docker containers..."
	docker compose up -d

up-build:
	@echo "Starting Docker containers..."
	docker compose up -d --build

down:
	@echo "Stopping Docker containers..."
	docker compose down

restart:
	@echo "Restarting Docker containers..."
	docker compose restart

logs:
	@echo "Showing Docker logs..."
	docker compose logs -f

prod-build:
	@echo "Building Docker containers for production..."
	docker compose -f docker-compose.prod.yml build

prod-up:
	@echo "Starting Docker containers for production..."
	docker compose -f docker-compose.prod.yml up -d

prod-down:
	@echo "Stopping Docker containers for production..."
	docker compose -f docker-compose.prod.yml down

prod-restart:
	@echo "Restarting Docker containers for production..."
	docker compose -f docker-compose.prod.yml restart

prod-logs:
	@echo "Showing Docker logs for production..."
	docker compose -f docker-compose.prod.yml logs -f

prod-deploy:
	@echo "Redeploying Docker containers for production..."
	docker compose -f docker-compose.prod.yml down
	docker compose -f docker-compose.prod.yml up -d

