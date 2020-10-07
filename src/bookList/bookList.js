import React from 'react';
import Book from '../book/book.js';

function BookList(props) {
  return (
    <div className='book-list'>
      {props.books ? props.books.map(book => <Book book={book} key={book.id}/>) : 'No results found'}
    </div>
  );
}

export default BookList;