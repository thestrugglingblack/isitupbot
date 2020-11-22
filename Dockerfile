FROM node:10

COPY . ./isitupbot

WORKDIR ./isitupbot

# Add in Disocrd Secret
ARG DISCORD_TOKEN

# BLT Files
RUN npm install && \
    npm run build && \
    npm run lint && \
    npm run test

# Run Bot
CMD node ./dist/src/index.js

