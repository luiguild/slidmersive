init:
	yarn

build: node_modules
	yarn build

node_modules: package.json
	yarn

deploy: build
	./deploy.sh

clean:
	rm -rf dist

.PHONY: build
