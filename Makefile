SHELL := /bin/bash

.PHONY: ci irc_started irc_finished test lint

ci: lint

lint:
	npm run lint

test:
	npm test
