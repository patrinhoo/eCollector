FROM nginxinc/nginx-unprivileged:1-alpine

COPY ./default.conf.tpl /etc/nginx/default.conf.tpl
COPY ./default-ssl.conf.tpl /etc/nginx/default-ssl.conf.tpl
COPY ./options-ssl-nginx.conf /etc/nginx/options-ssl-nginx.conf
COPY ./uwsgi_params /etc/nginx/uwsgi_params
COPY ./run.sh /run.sh

ENV APP_HOST=app
ENV APP_PORT=9000

USER root

RUN apk add --no-cache openssl bash
RUN mkdir -p /vol/static && \
    chmod 755 /vol/static && \
    touch /etc/nginx/conf.d/default.conf && \
    chown nginx:nginx /etc/nginx/conf.d/default.conf && \
    chmod +x /run.sh

VOLUME /vol/static
VOLUME /vol/www

CMD ["/run.sh"]
