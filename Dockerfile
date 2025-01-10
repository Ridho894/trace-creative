# Stage 1: Building the code
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package.json and yarn.lock (if you have one)
COPY package.json yarn.lock* ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Run the application
FROM node:22-alpine AS runner

WORKDIR /app

# Copy package.json and yarn.lock (if you have one)
COPY package.json yarn.lock* ./

# Install only production dependencies
RUN yarn install --production --frozen-lockfile

# Copy built application from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["yarn", "start"]