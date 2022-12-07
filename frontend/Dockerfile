FROM node:lts-alpine
WORKDIR /app
COPY ./frontend .
RUN npm ci
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start"]