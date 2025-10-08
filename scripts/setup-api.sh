#!/bin/bash

# API Setup Script for BGS Gebäudeservice
# Run this script to set up the API infrastructure

set -e

echo "🚀 Setting up BGS Gebäudeservice API..."

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if .env exists
if [ ! -f .env ]; then
    echo -e "${YELLOW}⚠️  .env file not found. Copying from .env.example...${NC}"
    cp .env.example .env
    echo -e "${GREEN}✅ .env file created. Please update it with your configuration.${NC}"
else
    echo -e "${GREEN}✅ .env file exists${NC}"
fi

# Install dependencies
echo -e "\n${YELLOW}📦 Installing dependencies...${NC}"
npm install zod @prisma/client

# Install dev dependencies
echo -e "\n${YELLOW}📦 Installing dev dependencies...${NC}"
npm install -D prisma

# Generate Prisma client
echo -e "\n${YELLOW}🔧 Generating Prisma client...${NC}"
npx prisma generate

# Create migration (optional)
read -p "Do you want to create a database migration? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}🗄️  Creating database migration...${NC}"
    npx prisma migrate dev --name add_api_models
fi

# Create directories
echo -e "\n${YELLOW}📁 Creating directories...${NC}"
mkdir -p app/api/{contact,newsletter,search,analytics}
mkdir -p lib/{email,validation,security,prisma,api}
mkdir -p tests/api
mkdir -p logs

echo -e "\n${GREEN}✅ API setup complete!${NC}"
echo -e "\n${YELLOW}Next steps:${NC}"
echo "1. Update .env with your configuration:"
echo "   - DATABASE_URL (PostgreSQL connection string)"
echo "   - EMAIL_PROVIDER (resend or sendgrid)"
echo "   - EMAIL_API_KEY (your API key)"
echo "   - EMAIL_FROM (sender email)"
echo "   - EMAIL_TO (recipient email)"
echo ""
echo "2. Run database migration (if not done already):"
echo "   npx prisma migrate dev"
echo ""
echo "3. Start development server:"
echo "   npm run dev"
echo ""
echo "4. Test API endpoints:"
echo "   curl -X POST http://localhost:3000/api/contact -H 'Content-Type: application/json' -d '{...}'"
echo ""
echo -e "${GREEN}📖 See app/api/README.md for full documentation${NC}"
