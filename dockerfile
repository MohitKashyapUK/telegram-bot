# image
FROM node:18-alpine

# copy dependencies file
COPY package*.json .

# terminal command
RUN apk update && apk add ffmpeg
RUN npm install

# copy current directories and files to container
COPY . .

# start command
CMD ["node", "index.js"]

# build command: docker build -t node .
# start container: docker run -d -p 3000:3000 node