import React, { Component } from 'react';
import './App.css';

export class Person extends Component {
  // for handeling props in class based component we need to load constructor and super function
  // constructor(props) {
  //   super();
  // }

  render() {
    return (
      <div className='App'>
        <h1>Class Based Component for Testing </h1>
        {/* <h2>
          Name: {this.props.name} Age: {this.props.age}
        </h2> */}
      </div>
    );
  }
}
export default Person;
