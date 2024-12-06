# Étape 1 : Construction
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Construire l'application
RUN npm run build

# Vérifier si le dossier dist existe après la construction
RUN ls -l /app/dist

# Étape 2 : Serveur de production
FROM nginx:latest

# Copier la configuration personnalisée de NGINX
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers de build dans le serveur NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer NGINX
CMD ["nginx", "-g", "daemon off;"]
