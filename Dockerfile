FROM node:14 as build-stage

WORKDIR /app
ADD . .
RUN npm install

EXPOSE 80
CMD ["npm", "run", "storybook"]