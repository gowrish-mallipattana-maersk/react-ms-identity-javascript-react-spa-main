FROM node:current-alpine

WORKDIR /app
ARG NPM_TOKEN
COPY .npmrc .npmrc
COPY package.json .
RUN npm install
RUN rm -f .npmrc
# Add your source files
COPY . .

CMD ["npm" , "start"]
