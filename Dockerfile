FROM node:20-bookworm


WORKDIR /usr/src/app


COPY ./ ./ 


RUN npm i


EXPOSE 3000


CMD [ "npm", "run", "dev" ]