# ---- Ambiente de Dev ----
FROM node:20-alpine

WORKDIR /app

# Copia apenas arquivos de dependências primeiro
COPY package.json package-lock.json* ./

# Instala TODAS as dependências (incluindo devDependencies)
RUN npm install --frozen-lockfile

# Copia o restante do código
COPY . .

# Porta padrão do Next.js
EXPOSE 3000

# Roda no modo dev (hot reload)
CMD ["npm", "run", "dev"]
