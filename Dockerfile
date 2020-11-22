FROM node:10

COPY . ./isitupbot

WORKDIR ./isitupbot

# Add in Disocrd Secret
ARG DISCORD_TOKEN
RUN echo $DISCORD_TOKEN

# BLT Files
RUN npm install && \
    npm run build && \
    npm run lint && \
    npm run test

RUN npm run verify
# Run Bot
CMD node ./dist/src/index.js

