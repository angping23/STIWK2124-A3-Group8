package arl.service;

import arl.model.Book;
import arl.repository.BookRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Page<Book> getAllBooks(String q, Pageable pageable) {
        if (q == null || q.trim().isEmpty()) {
            return bookRepository.findAll(pageable);
        }

        return bookRepository.findByTitleContainingIgnoreCaseOrAuthorContainingIgnoreCaseOrCategoryContainingIgnoreCase(
                q, q, q, pageable);
    }

    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    public Book getBookById(Long id) {
        return bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found with id: " + id));
    }

    public Book updateBook(Long id, Book bookDetails) {
        Book book = getBookById(id);

        book.setTitle(bookDetails.getTitle());
        book.setAuthor(bookDetails.getAuthor());
        book.setCategory(bookDetails.getCategory());
        book.setDescription(bookDetails.getDescription());

        return bookRepository.save(book);
    }

    public void deleteBook(Long id) {
        Book book = getBookById(id);
        bookRepository.delete(book);
    }
}