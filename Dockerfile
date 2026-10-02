FROM nginx:alpine

LABEL maintainer="Ensino Soberano <contato@ensinosoberano.com.br>"
LABEL description="Ensino Soberano Kids - Plataforma de Atividades e Apostilas Pedagógicas"

# Substituir configuração padrão do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar arquivos da aplicação
COPY . /usr/share/nginx/html

# Limpar arquivos desnecessários na imagem final
RUN rm -rf /usr/share/nginx/html/Dockerfile \
           /usr/share/nginx/html/docker-compose*.yml \
           /usr/share/nginx/html/nginx.conf \
           /usr/share/nginx/html/.git \
           /usr/share/nginx/html/.gitignore \
           /usr/share/nginx/html/test_verification.js \
           /usr/share/nginx/html/iniciar.bat

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
