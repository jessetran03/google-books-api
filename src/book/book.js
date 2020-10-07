import React from 'react';
import './book.css';

function Book(props) {
  return (
    <div className='book'>
      <div className='book-title'>
        <h2>{props.book.volumeInfo.title}</h2>
      </div>
      <div className='book-details'>
        <img src={props.book.volumeInfo.imageLinks.thumbnail} alt='book cover' />
        <div className='book-info'>
          <p>
            Author: {props.book.volumeInfo.authors[0]}
            <br />
            Price: {props.book.saleInfo.retailPrice?'$' + props.book.saleInfo.retailPrice.amount:'No price listed'}
          </p>
          <p>
            The resulting volume is one that will be welcomed by students and general readers alike.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Book;