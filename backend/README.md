# Accessible Reading List Backend

## Project Description
This project is a Spring Boot backend for the Accessible Reading List (ARL) web application. It provides CRUD REST APIs for managing books with validation, pagination, and search.

## Technologies Used
- Java 17
- Spring Boot
- Spring Data JPA
- MySQL
- Validation
- Maven

## Database Setup
Run `schema.sql` in MySQL Workbench.

Database name:
arl_db

## Application Setup
Update `src/main/resources/application.properties`:

spring.datasource.url=jdbc:mysql://localhost:3306/arl_db
spring.datasource.username=root
spring.datasource.password=1234
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
server.port=8081

## Basic Authentication
Username: group8
Password: 1234

## API Base URL
http://localhost:8081/api/books

## API Endpoints

### Create Book
POST /api/books
### Example Resquest:
{
  "title": "Java Programming",
  "author": "John Doe",
  "category": "Education",
  "description": "Basic Java book"
}

### List Books with Pagination
GET /api/books?page=0&size=5

### Search Books
GET /api/books?q=java&page=0&size=5

### Update Book
PUT /api/books/{id}
### Example Resquest
{
  "title": "Updated Java",
  "author": "John Doe",
  "category": "Education",
  "description": "Updated description"
}

### Delete Book
DELETE /api/books/{id}

### Frontend URL:
http://localhost:8081/index.html
Users can load books and click the Read Aloud button to hear the book information.

### How to Run
1. Start MySQL
2. Create database arl_db
3. Run schema.sql
4. Run ArlApplication.java
5. Open browser 
6. Enter Basic Authentication when prompted

### Error Handling

The API returns appropriate HTTP status codes:
- 400 Bad Request → Validation errors (invalid input)
- 404 Not Found → Book not found
- 401 Unauthorized → Authentication required
