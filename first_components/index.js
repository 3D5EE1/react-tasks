import React from 'react';
import ReactDOM from 'react-dom';

function FirstComponent () {
  return (
    <span>Hello User!!!</span>
  )
}

function SecondComponent () {
  return (
    <ul>
      <li><FirstComponent/></li>
      <li><FirstComponent/></li>
      <li><FirstComponent/></li>
    </ul>
  )
}

ReactDOM.render(<SecondComponent/>, document.getElementById('root'));