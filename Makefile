.PHONY: setup build deploy format clean outdated

setup:
	python3 -m venv .venv
	.venv/bin/python3 -m pip install -U pip
	.venv/bin/python3 -m pip install -r backend/requirements-dev.txt
	.venv/bin/python3 -m pip install -r backend/dependencies/requirements.txt

build:
	sam build --use-container --parallel --cached

deploy:
	sam deploy

clean:
	sam delete

format:
	.venv/bin/black .

outdated:
	.venv/bin/python3 -m pip list -o
