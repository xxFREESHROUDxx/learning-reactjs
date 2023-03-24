import React from 'react';
import '../stylesheets/Book.css';

const Book = (props) => {
  return (
    <div className='book'>
      <h2 onClick={props.change}>Book Name: {props.bookName} </h2>
      <h3>Author: {props.author} </h3>
    </div>
  );
};

export default Book;
