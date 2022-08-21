FROM node:18-alpine as builder
USER root
ENV NODE_ENV build

WORKDIR /home/node
RUN chown -R root /home/node

COPY . /home/node

RUN yarn install --frozen-lockfile \
    && yarn build

# ---

FROM node:18-alpine

RUN mkdir -p /home/app

COPY --from=builder /home/node/package.json /home/node/yarn.lock ./

RUN yarn install --frozen-lockfile

COPY --from=builder /home/node/dist /home/app

CMD ["node", "/home/app/src/main.js"]
