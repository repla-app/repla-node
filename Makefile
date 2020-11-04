SHELL := /bin/bash

.PHONY: ci irc_started irc_finished test lint

ci: irc_started lint irc_finished

lint:
	npm run lint

test:
	npm test

define irc_message
	remote=$$(git config --get remote.origin.url | tr -d '\n'); \
	if [[ $${remote}  =~ (https://|git@)github.com[/:](.*) ]]; then \
	  remote_subpath="$${BASH_REMATCH[2]}"; \
	  remote_subpath=$${remote_subpath%.git}; \
	  remote_url="https://github.com/$${remote_subpath}/pulls"; \
	else \
	  echo ""; \
	  exit 0; \
	fi; \
	( \
	echo "NICK repla-bot"; \
	echo "USER repla-bot 0.0.0.0 repla :Repla Bot"; \
	sleep 15; \
	echo "JOIN #repla-development"; \
	echo "PRIVMSG #repla-development :REPLABOT $1 $${remote_url}"; \
	echo "QUIT"; \
	) | nc irc.freenode.net 6667
endef

irc_started:
	@$(call irc_message,CISTARTED)

irc_finished:
	@$(call irc_message,CIFINISHED)
