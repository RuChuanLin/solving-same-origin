FROM node:8.12.0-alpine


ENV SERVER_ROOT /river

RUN mkdir -p ${SERVER_ROOT}
WORKDIR ${SERVER_ROOT}

COPY package.json ${SERVER_ROOT}

RUN npm install && \ 
  npm install -g nodemon && \
  npm audit fix

COPY . ${SERVER_ROOT}

CMD [ "npm", "run", "start.dev" ]