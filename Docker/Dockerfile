FROM node:latest

RUN npm i -g serverless@1.0.0-beta.2 && apt-get update && apt-get install -y python-pip && pip install awscli && apt-get clean
RUN pip install requests
