# Pull in the from the official nginx image.
FROM nginx:alpine 
COPY --from=build /build /usr/share/nginx/html
RUN  rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
