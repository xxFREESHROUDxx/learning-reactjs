import '../App.css';
import React, { Component } from 'react';
import Book from './Book';

export class BookList extends Component {
  state = {
    books: [
      { id: 1, author: 'Yujiro Hanma', bookName: 'Baki The Indestructable' },
      { id: 2, author: 'Bill Gates', bookName: 'Complete Guide to Computers' },
      { id: 3, author: 'Baibhav KC', bookName: 'The 5AM Rule' },
    ],
  };

  deleteBookState = (index) => {
    const books = this.state.books;
    books.splice(index, 1);
    this.setState({
      books: books,
    });
  };

  changeInput = (event, index) => {
    const book = {
      ...this.state.books[index],
    };
    book.bookName = event.target.value;
    const books = [...this.state.books];
    books[index] = book;
    this.setState({ books });
  };

  render() {
    const style = {
      border: '1px solid red',
      borderRadius: '5px',
      backgroundColor: 'red',
      color: 'white',
    };

    const bookState = this.state.books;

    const books = bookState.map((book, index) => {
      return (
        <Book
          bookName={book.bookName}
          author={book.author}
          delete={() => this.deleteBookState(index)}
          key={book.id}
          inputName={(event) => this.changeInput(event, index)}
        />
      );
    });

    return (
      <div className='App'>
        <h1 style={style}>Book Lists</h1>

        {books}
      </div>
    );
  }
}

export default BookList;
