import React from 'react';
import './App.css';

let Test = (props) => {
  console.log(props);
  return (
    <div className='App'>
      <h1>Arrow Functional Component for Testing</h1>
      <h2>
        Name: {props.name} Age: {props.age}
      </h2>
      <h3>New Children Data: {props.children}</h3>
    </div>
  );
};

// we can use create element to do the above steps too.
// return React.createElement(
//   'div',
//   { className: 'App' },
//   React.createElement('h1', null, 'This is a Test file')
// );

export default Test;
