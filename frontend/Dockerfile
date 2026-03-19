# Build stage
FROM node:20-alpine as build-stage

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Production stage using Nginx
FROM nginx:alpine

# Copy built assets to Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 (Cloud Run maps this)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
