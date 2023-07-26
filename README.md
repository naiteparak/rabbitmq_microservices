# Asynchronous HTTP Request Processing with NodeJS and RabbitMQ

This repository contains the implementation of an asynchronous microservices architecture for processing HTTP requests using Express.js and RabbitMQ. The project consists of two microservices, M1 and M2, which handle HTTP requests and tasks from RabbitMQ, respectively.

## Requirements

1. NodeJS and RabbitMQ stack for asynchronous request processing.
2. The project is hosted on GitHub.
3. Documentation for local deployment.
4. Logging for debugging and monitoring purposes.

## Architecture

The architecture involves two microservices:

### M1 - HTTP Request Processing Microservice
- Receives incoming HTTP requests.
- Translates the HTTP requests into tasks and publishes them to RabbitMQ.
- Listens for the results of processed tasks from M2 via RabbitMQ.
- Sends the HTTP response back to the client with the result of the processed task.

### M2 - Task Processing Microservice
- Listens for tasks from RabbitMQ.
- Processes the tasks asynchronously.
- Publishes the results back to RabbitMQ.

## Setup and Deployment

Follow these steps to deploy the microservices locally:

**Clone the Repository**
   ```
   git clone https://github.com/your-username/rabbitmq_microservices.git
   cd rabbitmq_microservices
   ```

# Installation

**Install Dependencies**
   ```
   cd M1
   npm install
   cd ../M2
   npm install
   ```
# Configuration

## Global Directory

1. Create the `.env` file using the `.env.example` template:
   ```bash
   cp .env.example .env
   ```

## M1 Directory
1. Navigate to the M1 directory:
   ```bash
   cd M1
   ```

2. Create the `.env` file using the `.env.example` template:
   ```bash
   cp .env.example .env
   ```

## M2 Directory
1. Navigate to the M2 directory:
   ```bash
   cd M2
   ```

2. Create the `.env` file using the `.env.example` template:
   ```bash
   cp .env.example .env
   ```

Now, the `.env` files have been created in both the M1 and M2 directories, and they are ready for configuration. You can edit these `.env` files to set the appropriate values for each configuration variable based on your specific setup.

# Running the Services

```bash
docker-compose up -d
```

Docker Compose will read the docker-compose.yml file, which defines the services and their configurations, and then proceed to create and start containers for M1, M2, and RabbitMQ.

# Stopping the Services
To stop and remove the running containers, use the following command:

```bash
docker-compose down
```

# Documentation 

The documentation for the M1 microservice is available at /api-docs.

## Accessing the API Documentation
To access the API documentation, follow these steps:

Ensure that the M1 microservice is up and running.

Open your web browser and enter the following URL:


```bash
http://localhost:3000/api-docs
```
Replace localhost with the appropriate host if your microservice is deployed on a different server.

The API documentation page will be displayed, providing detailed information about the available endpoints, request parameters, and response formats.

The documentation offers a clear understanding of how to interact with the M1 microservice and utilize its capabilities effectively.