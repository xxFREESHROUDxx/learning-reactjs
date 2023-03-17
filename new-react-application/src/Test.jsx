import React from 'react';
import './App.css';

function Test() {
  return (
    <div className='App'>
      <h1>This is a Test file</h1>
    </div>
  );

  // we can use create element to do the above steps too.
  // return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   React.createElement('h1', null, 'This is a Test file')
  // );
}

export default Test;
