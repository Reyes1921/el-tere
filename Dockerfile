# base image
FROM node:12.22.0-alpine
# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package*.json /usr/src/app/

# Install node
RUN npm install
COPY . /usr/src/app
EXPOSE 3000