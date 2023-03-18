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

  render() {
    return (
      <div className='App'>
        <h1>Book Lists</h1>

        <button onClick={this.changeBookState}>Change State</button>

        <Book
          bookName={this.state.books[0].bookName}
          author={this.state.books[0].author}
        />
        <Book
          bookName={this.state.books[1].bookName}
          author={this.state.books[1].author}
        />
        <Book
          bookName={this.state.books[2].bookName}
          author={this.state.books[2].author}
        />
      </div>
    );
  }
}

export default BookList;
