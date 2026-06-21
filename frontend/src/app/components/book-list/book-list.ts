import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book';
import { Book } from '../../models/book';
import { BookForm } from '../book-form/book-form';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule, FormsModule, BookForm ],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  books: Book[] = [];
  keyword: string = '';
  page: number = 0;
  size: number = 5;
  totalPages: number = 1;
  errorMessage: string = '';
  selectedBook: Book | null = null;

  constructor(
    private bookService: BookService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks(this.page, this.size, this.keyword).subscribe({
      next: (data) => {
        
        this.books = structuredClone(data.content || []);
        this.totalPages = data.totalPages || 1;
        this.errorMessage = '';
  
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = error.message;
        this.cdr.detectChanges();
      }
    });
  }

  searchBooks(): void {
    this.page = 0;
    this.loadBooks();
  }

  previousPage(): void {
    if (this.page > 0) {
      this.page--;
      this.loadBooks();
    }
  }

  nextPage(): void {
    if (this.page < this.totalPages - 1) {
      this.page++;
      this.loadBooks();
    }
  }

  saveBook(book: Book): void {
  if (book.id) {
    this.bookService.updateBook(book.id, book).subscribe({
      next: () => {
        this.selectedBook = null;
        this.loadBooks();
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = error.message;
        this.cdr.detectChanges();
      }
    });
  } else {
    this.bookService.createBook(book).subscribe({
      next: () => {
        this.loadBooks();
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = error.message;
        this.cdr.detectChanges();
      }
    });
  }
}

editBook(book: Book): void {
  this.selectedBook = { ...book };
}

cancelEdit(): void {
  this.selectedBook = null;
}

  deleteBook(id?: number): void {
    if (!id) return;

    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(id).subscribe({
        next: () => {
          this.loadBooks();
        },
        error: (error) => {
          console.error(error);
          this.errorMessage = error.message;
          this.cdr.detectChanges();
        }
      });
    }
  }
    readAloud(book: Book): void {
    const text = `${book.title}. Author: ${book.author}. Category: ${book.category}. ${book.description}`;

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  }
}