FROM python:3.12.1-alpine

ENV PYTHONUNBUFFERED 1

RUN apk add --virtual .react-deps nodejs npm

COPY ./app/react/dashboard/package.json /app/react/dashboard/package.json
WORKDIR /app/react/dashboard
RUN npm install

WORKDIR /
COPY ./requirements.txt /requirements.txt
COPY ./scripts /scripts

RUN mkdir -p /app

WORKDIR /app

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    apk add --update --no-cache postgresql-client && \
    apk add --update --no-cache --virtual .tmp-deps \
        build-base postgresql-dev musl-dev linux-headers && \
    apk add --no-cache libffi-dev gobject-introspection cairo-dev pango-dev gdk-pixbuf-dev zlib-dev ttf-dejavu font-noto && \
    apk add --no-cache --virtual .build-deps gcc g++ libc-dev cairo pango gdk-pixbuf && \
    /py/bin/pip install -r /requirements.txt && \
    apk del .tmp-deps && \
    apk del .build-deps && \
    adduser --disabled-password --no-create-home app && \
    mkdir -p /vol/web/static && \
    mkdir -p /vol/web/media && \
    chown -R app:app /vol && \
    chmod -R 755 /vol && \
    chmod -R +x /scripts

WORKDIR /
COPY ./app /app

WORKDIR /app/react/dashboard
RUN npm run build

WORKDIR /app

ENV PATH="/scripts:/py/bin:$PATH"

USER app

CMD ["run.sh"]
