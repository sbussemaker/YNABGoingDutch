FROM nginx:alpine
ARG SYNC
ARG PAT
WORKDIR /ynabgoingdutch

COPY ./ ./

RUN sed -i "s/let _autoSync = false;/let _autoSync = $SYNC;/g" js/settingsStorage.js && \
    sed -i "s/let _pat = \"\";/let _pat = \"$PAT\";/g" js/settingsStorage.js

COPY ./nginx.conf /etc/nginx/nginx.conf