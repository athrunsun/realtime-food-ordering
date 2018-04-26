#!/usr/bin/env bash

PROJECT_NAME=food_ordering_local_mysql
COMPOSE_FILE=docker-compose.db.yml

docker-compose -f $COMPOSE_FILE -p $PROJECT_NAME down
