#DOCKER-VERSION 1.12.1
FROM    centos:centos7
MAINTAINER HKM Consulting LLC "jduff@hkmconsultingllc.com"
ENV REFRESHED_AT 2016-09-14

RUN yum update -y;yum install unzip wget tar -y
RUN yum install epel-release -y
RUN yum install npm -y
RUN node --version
RUN npm install -g nodemon

RUN mkdir /opt/app;mkdir /opt/app/booknds

ADD booknds_analytics.zip /opt/app/booknds
RUN ls -la /opt/app/booknds;cd /opt/app/booknds;unzip booknds_analytics.zip;ls -ltr

# Create booknds user, change permissions and ownership of booknds folder
RUN useradd -ms /bin/bash booknds;chmod -R 755 /opt/app/booknds;chown booknds:booknds /opt/app/booknds

EXPOSE 3000
EXPOSE 3306

# Set runtime user
USER booknds

CMD node /opt/app/booknds/app.js
