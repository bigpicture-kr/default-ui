FROM node:14 as build-stage

WORKDIR /app
ADD . .
RUN npm install
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

EXPOSE 80
CMD ["npm", "run", "storybook:prod"]