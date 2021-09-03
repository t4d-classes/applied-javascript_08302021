# Docker Instructions

To build the Container Image, [Docker Desktop](https://www.docker.com/products/docker-desktop) will need to be installed.

Open a terminal window, and make sure you are in the `server-app` folder. Then perform the following steps.

**Step 1:** Build the Docker Image using the `Dockerfile`

```bash
docker build -t node-full-stack-app .
```

**Step 2:** Run the Docker Image with the `./env.docker` environment variables file.

```bash
docker run --name node-full-stack-app-demo -d -p 3060:3060 --env-file ./env.docker node-full-stack-app
```

**Step 3:** Open a web browser and navigate to `http://localhost:3060` to view the site.

**Step 4:** To stop the container, forcefully remove the container using the name of the container.

```bash
docker rm -f node-full-stack-app-demo
```

**Step 5:** To remove the `node-full-stack-app` image, run the following command.

```bash
docker image rm node-full-stack-app
```

## Great job!


