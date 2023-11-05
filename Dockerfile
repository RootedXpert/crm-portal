FROM node
WORKDIR /app
COPY . .
RUN npm ci
RUN npm i sharp
RUN npm run build
CMD ["npm","start"]
