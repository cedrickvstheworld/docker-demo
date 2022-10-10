FROM node:16-slim
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN npm install -g typescript
RUN tsc -p .
RUN rm -R src/
CMD ["npm", "start"]