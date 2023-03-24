import React from 'react';
import '../stylesheets/Book.css';

const Book = (props) => {
  return (
    <div className='book'>
      <h1 onClick={props.delete}>Book Name: {props.bookName} </h1>
      <h2>Author: {props.author} </h2>
      <input type='text' onChange={props.inputName} value={props.bookName} />
    </div>
  );
};

export default Book;
