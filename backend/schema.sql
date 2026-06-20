CREATE DATABASE IF NOT EXISTS arl_db;
USE arl_db;

CREATE TABLE IF NOT EXISTS books (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    author VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT NOT NULL
);
INSERT INTO books (title, author, category, description) VALUES
('Java Programming', 'John Doe', 'Education', 'Java book'),
('Java Programming', 'John Doe', 'Education', 'Basic Java'),
('Java Programming', 'John Doe', 'Education', 'Basic Java book'),
('Java Programming', 'John Doe', 'Education', 'Basic Java book'),
('Java Programming', 'John Doe', 'Education', 'Basic Java book'),
('Java Programming', 'John Doe', 'Education', 'Basic Java book'),
('Java Basics', 'John Lee', 'Programming', 'Beginner Java book');