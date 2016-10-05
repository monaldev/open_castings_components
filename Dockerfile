#Choose a base image
FROM node:6.0.0

RUN npm set progress=false
RUN npm install getstorybook -g

# Create a new folder for our application
RUN mkdir -p /usr/src/app

WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
ENV NODE_ENV=production
ENV PORT=3000

RUN chmod +x /usr/src/app
