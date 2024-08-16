FROM httpd:2.4

WORKDIR /usr/local/apache2/htdocs/

COPY . .

EXPOSE 1337

CMD ["httpd-foreground"]

