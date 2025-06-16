#!/bin/bash

echo "Starting Double Bay Newsagency build..."

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the project
echo "Building Next.js project..."
npm run build

echo "Build completed successfully!" 