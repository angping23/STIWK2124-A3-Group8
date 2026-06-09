import { Book } from '../models/book';

describe('Book Interface', () => {

  it('should create a valid book object', () => {

    const book: Book = {
      id: 1,
      title: 'Java Programming',
      author: 'John Doe',
      category: 'Education',
      description: 'Basic Java concepts'
    };

    expect(book).toBeTruthy();
    expect(book.title).toBe('Java Programming');

  });

});