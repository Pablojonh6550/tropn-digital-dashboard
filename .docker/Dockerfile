# ---- Base de build ----
FROM node:20-alpine AS builder

WORKDIR /app

# Instala dependências
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile

# Copia o restante do código
COPY . .

# Faz o build do Next.js
RUN npm run build

# ---- Runtime (produção) ----
FROM node:20-alpine AS runner

WORKDIR /app

# Define ambiente
ENV NODE_ENV=production
ENV PORT=3000

# Copia dependências de produção
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Copia build do Next
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]
