# TD7A4

## How to run the code in standalone

You need node and npm installed on your machine.
If you don't have it, you can install it from [here](https://nodejs.org/en/download/).

Then, you need to install the dependencies:

```bash
npm install
```
    
Then, you can run the code:
    
```bash
npm start
```

## How to run the code in docker

You need docker and docker-compose installed on your machine.
If you don't have it, you can install it from [here](https://docs.docker.com/get-docker/).

You can chose to build the image and run it on its own but i do not recommend it due to the hassle of building and feeding environment variables to the container and thus will not provide instructions for it.

To run the code with docker-compose, run the following command:

```bash    
docker-compose up -d
```

Please note that you can modify the environment variables in the docker-compose.yml file. to suit your needs.
