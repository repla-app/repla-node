SHELL := /bin/bash

.PHONY: ci test lint

ci: lint

lint:
	npm run lint

test:
	npm test
