package arl.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title is required")
    @Size(max = 150, message = "Title must be less than 150 characters")
    private String title;

    @NotBlank(message = "Author is required")
    @Size(max = 100, message = "Author must be less than 100 characters")
    private String author;

    @NotBlank(message = "Category is required")
    @Size(max = 100, message = "Category must be less than 100 characters")
    private String category;

    @NotBlank(message = "Description is required")
    @Column(columnDefinition = "TEXT")
    private String description;

    public Book() {
    }

    public Book(Long id, String title, String author, String category, String description) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.category = category;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}