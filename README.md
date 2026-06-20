# Accessible Reading List (ARL) System

## Project Overview

The Accessible Reading List (ARL) System is a web-based application developed for STIWK2124 Web Engineering. The system allows users to manage book records through a simple and user-friendly interface.

Users can:

- Add new books
- View book records
- Update existing books
- Delete books
- Search books
- Navigate records using pagination

The project was developed using Angular, Spring Boot, and MySQL.

---

## Team Members

| Name | Matric Number |
|--------|--------|
| Yew Ang Ping | 298243 |
| Tan Ying Ling | 297859 |
| Lian Jia Ze | 299789 |

---

## Technologies Used

### Frontend
- Angular
- TypeScript
- HTML
- CSS

### Backend
- Spring Boot
- Java 17
- Maven

### Database
- MySQL 8

### DevOps
- Docker
- Docker Compose
- GitHub Actions (CI)

### Testing
- JUnit
- Angular Unit Testing (Karma & Jasmine)

---

# System Features

### Book Management
- Create Book Records
- View Book Records
- Update Book Records
- Delete Book Records

### Search Functionality
- Search books by title, author, or category

### Pagination
- Display records in pages

### Security
- Spring Security Basic Authentication
- Protected POST, PUT, DELETE endpoints
- Client-side Validation
- Server-side Validation

### Error Handling
- 400 Bad Request
- 401 Unauthorized
- 404 Not Found

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

Docker Desktop Download:

https://www.docker.com/products/docker-desktop/

---

# Installation Guide

## 1. Clone Repository

```bash
git clone https://github.com/angping23/STIWK2124-A3-Group8.git
cd STIWK2124-A3-Group8
```

---

## 2. Start Docker Desktop

Make sure Docker Desktop is running before executing Docker commands.

---

## 3. Build and Run the System

Run:

```bash
docker compose up --build
```

The command will automatically:

- Build Angular Frontend
- Build Spring Boot Backend
- Start MySQL Database
- Create required database tables
- Insert sample book records

---

## 4. Verify Containers

Run:

```bash
docker ps
```

Expected output:

```text
arl-frontend
arl-backend
arl-mysql
```

All containers should show:

```text
Up
```

---

# Access the Application

After all containers have started successfully:

## Frontend

Open in browser:

```text
http://localhost:4200
```

You should see:

```text
Book Records
```

with sample books displayed.

---

## Backend REST API

Open:

```text
http://localhost:8081/api/books
```

Expected result:

```json
{
  "content": [
    ...
  ]
}
```

---

## Database

MySQL is available on:

```text
localhost:3307
```

Database Name:

```text
arl_db
```

---

# Authentication

Protected write operations require Basic Authentication.

Username:

```text
group8
```

Password:

```text
1234
```

Used for:

- POST
- PUT
- DELETE

requests.

---

# Testing

## Backend Testing

JUnit tests were implemented to verify:

- Book retrieval
- Validation
- Authentication
- Error handling

---

## Frontend Testing

Angular unit testing was implemented using:

- Karma
- Jasmine

---

# Docker Containerization

The project was containerized using Docker and Docker Compose.

Containers:

| Container | Purpose |
|------------|------------|
| arl-frontend | Angular Frontend |
| arl-backend | Spring Boot Backend |
| arl-mysql | MySQL Database |

Docker Compose manages service orchestration and communication between containers.

---

# Continuous Integration (CI)

GitHub Actions was configured for Continuous Integration.

The CI pipeline automatically:

- Builds Spring Boot Backend
- Builds Angular Frontend
- Verifies project build consistency

The workflow runs automatically whenever code is pushed to GitHub.

---

# Project Screenshots

## Book Records Interface

(Add Screenshot)

## Docker Deployment

(Add docker ps Screenshot)

## GitHub Actions CI Pipeline

(Add GitHub Actions Screenshot)

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

The Accessible Reading List (ARL) System successfully demonstrates full-stack web application development through the integration of Angular, Spring Boot, and MySQL. The project incorporates security, testing, Docker containerization, and GitHub Actions Continuous Integration (CI) to improve software quality, deployment readiness, and maintainability.
