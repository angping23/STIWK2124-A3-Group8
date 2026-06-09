# STIWK2124-A2-Group8 - Accessible Reading List Angular Frontend

## Project Overview

This project is an Angular frontend application developed for STIWK2124 Assignment 2.

The system connects to the Spring Boot backend API from Assignment 1 and allows users to manage an Accessible Reading List. Users can view, search, add, edit, and delete book records through a web-based interface.

## Technologies Used

- Angular
- TypeScript
- HTML
- CSS
- Spring Boot Backend API
- MySQL Database
- Git and GitHub

## Backend API

Backend API URL:

http://localhost:8081/api/books

Backend test URL:

http://localhost:8081/api/books?page=0&size=5

## Frontend URL

The Angular frontend runs at:

http://localhost:4201

## Authentication

The backend uses Basic Authentication for protected API operations.

Username: group8  
Password: 1234

The Angular frontend sends the Basic Auth header for create, update, and delete operations.

## Features

1. View book list from backend API
2. Search books by title, author, or category
3. Pagination with Previous and Next buttons
4. Add new book
5. Edit existing book
6. Delete book with confirmation
7. Form validation for required fields:
   - Title
   - Author
   - Category
   - Description

## How to Run the Project

### Step 1: Start Backend

Open the backend project folder:

STIWK2124-A1-Group8

Run:

.\mvnw.cmd spring-boot:run

Make sure the backend is running on:

http://localhost:8081

### Step 2: Start Angular Frontend

Open the frontend project folder:

STIWK2124-A2-Group8

Install dependencies if needed:

npm install

Run Angular frontend:

ng serve --port 4201

Open browser:

http://localhost:4201

## Project Structure

src/app/
- components/
  - book-form/
  - book-list/
- models/
  - book.ts
- services/
  - book.ts
- app.config.ts
- app.html
- app.ts

## Notes

- The backend must be running before using the Angular frontend.
- CORS has been configured in the backend to allow Angular frontend access.
- The frontend was tested using http://localhost:4201.
