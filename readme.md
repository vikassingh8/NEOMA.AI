
# Task Management API
A simple Node.js Task Management API with user registration, login, and task CRUD operations.
## Table of Contents
* **Introduction**
* **Installation**
* **Clone the Repository**
* **Install Dependencies**
* **Environment Variables**
* **Usage**
* **Start the Server**
* **API Endpoints**
* **User Registration**
* **User Login**
* **Create Task**
* **Get User Tasks**
* **Update Task**
* **Delete Task**
* **Authentication**
* **Error Handling**
* **License**
## Introduction

This API provides a platform for managing tasks associated with user accounts. Users can register, log in, and perform CRUD operations on their tasks.

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```
    
### Install Dependencies

```bash
npm install

```

### Environment Variables
Create a .env file in the project root with the following:

```bash
MONGODB_URI=your_mongodb_uri
SECRET_KEY=your_secret_key
```

### Usage
Start the Server

```bash
npm start

```
### API Endpoints
User Registration
Endpoint: POST /auth/register

Description: Register a new user.

Request Body:

```bash
{
  "username": "example_user",
  "password": "your_password"
}

```
    

    
### User Login
Endpoint: POST /auth/login

Description: Login and receive an authentication token.

Request Body:
```bash
{
  "username": "example_user",
  "password": "your_password"
}
```

### Create Task
Endpoint: POST /tasks

Description: Create a new task.

Authentication: Bearer Token (received after login)

Request Body:
```bash
{
  "title": "Example Task",
  "description": "Description of the task",
  "status": "in-progress"
}

```
    

### Get User Tasks
Endpoint: GET /tasks
Description: Get tasks for the authenticated user.
Authentication: Bearer Token (received after login)
Update Task
Endpoint: PUT /tasks/:taskId

Description: Update an existing task.

Authentication: Bearer Token (received after login)

Request Body:
```bash
{
  "title": "Updated Task",
  "description": "Updated description",
  "status": "completed"
}

### Delete Task
Endpoint: DELETE /tasks/:taskId
Description: Delete an existing task.
Authentication: Bearer Token (received after login)
Authentication
This API uses JSON Web Tokens (JWT) for authentication. Include the JWT in the Authorization header as follows:
```bash
Authorization: Bearer <your_token>


```
    

    
## Error Handling
In case of an error, the API will return an appropriate HTTP status code along with a JSON response containing the error message.
## License
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License - see the LICENSE file for details.



