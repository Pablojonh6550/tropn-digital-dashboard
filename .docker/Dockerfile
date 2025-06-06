FROM node:18-alpine3.16

# Cria diretório da app
WORKDIR /app

# Copia apenas os arquivos de dependências
COPY package.json package-lock.json* ./

# Instala dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Expõe a porta do Next.js
EXPOSE 3000

# Comando default (pode ser sobrescrito no docker-compose)
CMD ["npm", "run", "dev"]
