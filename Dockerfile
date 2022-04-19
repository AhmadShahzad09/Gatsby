FROM ubuntu:latest

RUN apt update

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Europe/Moscow

RUN apt-get install -y curl wget git vim



# RUN git clone https://github.com/AhmadShahzad09/Gatsby.git

RUN apt-get install -y curl wget git vim


# Install node first to run npm

RUN curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh &&\
   bash nodesource_setup.sh 

RUN apt-get install -y nodejs
