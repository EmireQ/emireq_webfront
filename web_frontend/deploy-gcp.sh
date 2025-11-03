#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🐳 EmireQ Frontend - Docker + GCP Deployment${NC}"
echo "=================================================="

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}❌ Google Cloud CLI not found. Please install it first:${NC}"
    echo "   curl https://sdk.cloud.google.com | bash"
    echo "   exec -l \$SHELL"
    echo "   gcloud init"
    exit 1
fi

# Check if docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker not found. Please install Docker first.${NC}"
    exit 1
fi

# Get project ID
PROJECT_ID=$(gcloud config get-value project 2>/dev/null)
if [ -z "$PROJECT_ID" ]; then
    echo -e "${YELLOW}⚠️  No GCP project configured. Run 'gcloud init' first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Using GCP Project: $PROJECT_ID${NC}"

# Build the application
echo -e "${BLUE}🏗️  Building React application...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

# Build Docker image
echo -e "${BLUE}🐳 Building Docker image...${NC}"
docker build -t gcr.io/$PROJECT_ID/emireq-frontend:latest .

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Docker build failed!${NC}"
    exit 1
fi

# Test Docker image locally (optional)
echo -e "${YELLOW}🧪 Testing Docker image locally...${NC}"
echo "Starting container on http://localhost:8080"
echo "Press Ctrl+C to stop and continue with deployment"
docker run -p 8080:80 --rm gcr.io/$PROJECT_ID/emireq-frontend:latest &
DOCKER_PID=$!
sleep 3

# Ask user if they want to continue with deployment
echo -e "${BLUE}Do you want to deploy to GCP App Engine? (y/n)${NC}"
read -r DEPLOY_CHOICE

# Stop local Docker container
kill $DOCKER_PID 2>/dev/null

if [ "$DEPLOY_CHOICE" = "y" ] || [ "$DEPLOY_CHOICE" = "Y" ]; then
    # Push image to Google Container Registry
    echo -e "${BLUE}📤 Pushing image to Google Container Registry...${NC}"
    gcloud auth configure-docker --quiet
    docker push gcr.io/$PROJECT_ID/emireq-frontend:latest
    
    # Deploy to App Engine
    echo -e "${BLUE}🚀 Deploying to Google App Engine...${NC}"
    gcloud app deploy app.yaml --quiet
    
    # Get the deployed URL
    APP_URL=$(gcloud app browse --no-launch-browser 2>&1 | grep -o 'https://[^[:space:]]*')
    
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}🌐 Your app is live at: $APP_URL${NC}"
    
    # Open the URL
    echo -e "${BLUE}Opening in browser...${NC}"
    if command -v xdg-open &> /dev/null; then
        xdg-open "$APP_URL"
    elif command -v open &> /dev/null; then
        open "$APP_URL"
    fi
else
    echo -e "${YELLOW}⏹️  Deployment cancelled. Your Docker image is ready for manual deployment.${NC}"
fi

echo -e "${GREEN}🎉 Done!${NC}"