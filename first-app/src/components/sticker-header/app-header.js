import React from 'react';

const Header = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>My Stickers</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default Header;