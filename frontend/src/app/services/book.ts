import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, timeout, catchError, throwError } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:8081/api/books';

  private authHeaders = new HttpHeaders({
    Authorization: 'Basic ' + btoa('group8:1234')
  });

  constructor(private http: HttpClient) {}

  getBooks(page: number = 0, size: number = 5, keyword: string = ''): Observable<any> {
  let url = `${this.apiUrl}?page=${page}&size=${size}`;

  if (keyword.trim() !== '') {
    url = `${this.apiUrl}?q=${keyword}&page=${page}&size=${size}`;
  }

  return this.http.get<any>(url).pipe(
    timeout(5000),
    catchError(error => {
      console.error(error);
      return throwError(() => new Error('Failed to load books.'));
    })
  );
}

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book, {
      headers: this.authHeaders
    }).pipe(
      timeout(5000),
      catchError(error => {
        console.error(error);
        return throwError(() => new Error('Failed to create book.'));
      })
    );
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book, {
      headers: this.authHeaders
    }).pipe(
      timeout(5000),
      catchError(error => {
        console.error(error);
        return throwError(() => new Error('Failed to update book.'));
      })
    );
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.authHeaders
    }).pipe(
      timeout(5000),
      catchError(error => {
        console.error(error);
        return throwError(() => new Error('Failed to delete book.'));
      })
    );
  }
}