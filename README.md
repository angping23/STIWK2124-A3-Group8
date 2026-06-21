# Accessible Reading List (ARL) System

## Project Overview

The Accessible Reading List (ARL) System is a full-stack web application developed for STIWK2124 Web Engineering. The system allows users to manage book records through a simple and user-friendly interface.

The application integrates Angular frontend development, Spring Boot backend services, and MySQL database management. It supports CRUD operations, search functionality, pagination, validation, authentication, testing, Docker containerization, Continuous Integration (CI), and accessibility features.

Users can:

- Add new books
- View book records
- Update existing books
- Delete books
- Search books
- Navigate records using pagination
- Listen to book information using the Read Aloud feature

---

# Team Members

| Name | Matric Number |
|--------|--------|
| Yew Ang Ping | 298243 |
| Tan Ying Ling | 297859 |
| Lian Jia Ze | 299789 |

---

# Technologies Used

## Frontend

- Angular
- TypeScript
- HTML
- CSS

## Backend

- Spring Boot
- Java 17
- Maven

## Database

- MySQL 8

## DevOps

- Docker
- Docker Compose
- GitHub Actions (CI)

## Testing

- JUnit
- Angular Unit Testing (Karma & Jasmine)

---

# System Features

## Book Management

- Create Book Records
- View Book Records
- Update Book Records
- Delete Book Records

## Search Functionality

- Search books by title, author, or category

## Pagination

- Display records in pages

## Security

- Spring Security Basic Authentication
- Protected POST, PUT, DELETE endpoints
- Client-side Validation
- Server-side Validation

## Error Handling

- 400 Bad Request
- 401 Unauthorized
- 404 Not Found

## Accessibility Feature

- Read Aloud function using Web Speech API
- Users can listen to book title, author, category, and description

---

# System Architecture

```text
Angular Frontend
       │
       ▼
Spring Boot REST API
       │
       ▼
MySQL Database
```

---

# Prerequisites

Before running the project, install:

- Docker Desktop
- Git

Docker Desktop:

https://www.docker.com/products/docker-desktop/

---

# Installation Guide

## Step 1: Clone Repository

```bash
git clone https://github.com/angping23/STIWK2124-A3-Group8.git
cd STIWK2124-A3-Group8
```

---

## Step 2: Start Docker Desktop

Open Docker Desktop and ensure Docker Engine is running.

Verify Docker installation:

```bash
docker ps
```

---

## Step 3: Build and Run the Application

Execute:

```bash
docker compose up --build
```

This command will automatically:

- Build Angular Frontend
- Build Spring Boot Backend
- Start MySQL Database
- Create database schema
- Insert sample records
- Connect all services

---

## Step 4: Verify Containers

Run:

```bash
docker ps
```

Expected containers:

```text
arl-frontend
arl-backend
arl-mysql
```

All containers should display:

```text
Up
```

---

# Access the Application

## Frontend

Open:

```text
http://localhost:4200
```

You should see:

```text
Reading List Management
```

and the Book Records table.

---

## Backend REST API

Open:

```text
http://localhost:8081/api/books
```

Expected response:

```json
{
  "content": [...],
  "totalPages": 1,
  "totalElements": 5
}
```

---

## Database

MySQL Configuration:

```text
Host: localhost
Port: 3307
Database: arl_db
```

---

# Authentication

Protected write operations require Basic Authentication.

Credentials:

```text
Username: group8
Password: 1234
```

Authentication is required for:

- POST Requests
- PUT Requests
- DELETE Requests

---

# Accessibility Feature

## Read Aloud Feature

The ARL system includes a Read Aloud feature implemented using the Web Speech API.

Users can:

1. Open the Book Records page.
2. Click the **Read Aloud** button.
3. Listen to the selected book's:
   - Title
   - Author
   - Category
   - Description

This feature improves accessibility and usability for users with reading difficulties or visual impairments.

---

# Testing

## Backend Testing

JUnit tests were implemented to verify:

- Book retrieval
- Book creation
- Validation rules
- Authentication
- Error handling

---

## Frontend Testing

Angular unit tests were implemented using:

- Karma
- Jasmine

The tests verify component functionality and frontend behavior.

---

# Docker Containerization

The project was containerized using Docker and Docker Compose.

## Containers

| Container | Purpose |
|------------|------------|
| arl-frontend | Angular Frontend |
| arl-backend | Spring Boot Backend |
| arl-mysql | MySQL Database |

Docker Compose manages service orchestration and communication between all containers.

---

# Continuous Integration (CI)

GitHub Actions was configured for Continuous Integration.

The CI pipeline automatically:

- Builds Spring Boot Backend
- Builds Angular Frontend
- Verifies build consistency
- Detects integration issues

The workflow runs automatically whenever code is pushed to GitHub.

---

# Project Screenshots

## Book Records Interface

<img width="1867" height="861" alt="image" src="https://github.com/user-attachments/assets/102a4d12-d6e4-4505-8ab7-534450f91852" />
<img width="1866" height="565" alt="image" src="https://github.com/user-attachments/assets/0d91f4d3-ab60-4306-bf4a-ef6a69496aa9" />

---

## Read Aloud Feature

<img width="1245" height="532" alt="image" src="https://github.com/user-attachments/assets/0577cca7-fe9f-473f-895d-eb9f680cca80" />

---

## Docker Deployment

<img width="927" height="113" alt="image" src="https://github.com/user-attachments/assets/b0c36d27-7868-4442-917b-3cb58cc2f3c4" />

---

## GitHub Actions CI Pipeline

<img width="865" height="284" alt="image" src="https://github.com/user-attachments/assets/e8eeba4b-547e-4469-b272-a0111b62aef7" />

---

# Stop the Application

To stop all running containers:

```bash
docker compose down
```

---

# Course Information

Course:

STIWK2124 Web Engineering

Semester:

Second Semester 2025/2026 (A252)

University:

Universiti Utara Malaysia

Lecturer:

Dr. Bamatraf Munya Saleh Saeed

---

# Conclusion

The Accessible Reading List (ARL) System successfully demonstrates the development of a full-stack web application using Angular, Spring Boot, and MySQL. The system supports CRUD operations, search functionality, pagination, authentication, validation, testing, and error handling. In addition, Docker containerization and GitHub Actions Continuous Integration (CI) were implemented to improve deployment readiness and software quality. The Read Aloud accessibility feature further enhances usability by allowing users to listen to book information through the Web Speech API. Overall, the project fulfills the requirements of STIWK2124 Web Engineering Assignment 3 while demonstrating modern web development and DevOps practices.
