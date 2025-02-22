#!/bin/bash

# Stop script on any error
set -e

echo "🚀 Building and starting containers..."
docker-compose up --build -d

echo "✅ Containers are running!"
docker ps
