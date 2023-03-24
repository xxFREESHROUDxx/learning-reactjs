import '../App.css';
import React, { Component } from 'react';
import Book from './Book';

export class BookList extends Component {
  state = {
    books: [
      { author: 'Yujiro Hanma', bookName: 'Baki The Indestructable' },
      { author: 'Bill Gates', bookName: 'Complete Guide to Computers' },
      { author: 'Baibhav KC', bookName: 'The 5AM Rule' },
    ],
  };

  changeBookState = () => {
    this.setState({
      books: [
        { author: 'Yujiro Hanma new', bookName: 'Baki The Indestructable new' },
        {
          author: 'Bill Gates new',
          bookName: 'Complete Guide to Computers new',
        },
        { author: 'Baibhav KC new', bookName: 'The 5AM Rule new' },
      ],
    });
  };

  //   constructor() {
  //     super();
  //     this.state = {books: [
  //   { author: 'Yujiro Hanma', bookName: 'Baki' },
  //   { author: 'Bill Gates', bookName: 'Complete Guide to Computers' },
  //   { author: 'Baibhav KC', bookName: 'The 5AM Rule' },
  // ],};
  //   }

  changeInput = (event) => {
    this.setState({
      books: [
        { author: 'Yujiro Hanma', bookName: event.target.value },
        { author: 'Bill Gates', bookName: 'Complete Guide to Computers' },
        { author: 'Baibhav KC', bookName: 'The 5AM Rule' },
      ],
    });
  };

  render() {
    const style = {
      border: '1px solid red',
      borderRadius: '5px',
      backgroundColor: 'red',
      color: 'white',
    };

    const bookState = this.state.books;

    const books = bookState.map((book) => {
      return <Book bookName={book.bookName} author={book.author} />;
    });

    return (
      <div className='App'>
        <h1 style={style}>Book Lists</h1>

        <button onClick={this.changeBookState}>Change State</button>

        <input type='text' onChange={this.changeInput} />

        {books}
      </div>
    );
  }
}

export default BookList;
