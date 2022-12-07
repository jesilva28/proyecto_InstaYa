FROM node:lts-alpine 
WORKDIR /app
COPY ./backend .
RUN npm ci 
RUN npm install
EXPOSE 5000
CMD [ "node", "index.js" ]