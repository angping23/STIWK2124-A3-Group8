import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm implements OnChanges {
  @Input() selectedBook: Book | null = null;
  @Output() saveBook = new EventEmitter<Book>();
  @Output() cancelEdit = new EventEmitter<void>();

  book: Book = {
    title: '',
    author: '',
    category: '',
    description: ''
  };

  submitted: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedBook'] && this.selectedBook) {
      this.book = { ...this.selectedBook };
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (
      this.book.title.trim() === '' ||
      this.book.author.trim() === '' ||
      this.book.category.trim() === '' ||
      this.book.description.trim() === ''
    ) {
      return;
    }

    this.saveBook.emit(this.book);

    this.resetForm();
  }

  resetForm(): void {
    this.book = {
      title: '',
      author: '',
      category: '',
      description: ''
    };

    this.submitted = false;
    this.cancelEdit.emit();
  }
}