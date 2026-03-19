# Use Node.js LTS
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and config
COPY . .

# Generate Prisma Client (requires DATABASE_URL at build time or dummy string)
ENV DATABASE_URL="postgresql://dummy:password@localhost:5432/dummy"
RUN npx prisma generate

# Build TypeScript code
RUN npm run build

# Expose port (Cloud Run sets PORT env var)
EXPOSE 5001
ENV PORT=5001

# Start the server
CMD ["npm", "start"]
