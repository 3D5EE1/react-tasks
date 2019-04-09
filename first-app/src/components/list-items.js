import React from 'react';

const ListItems = ({ label, important = false }) => {

  const style = {
    color: important ? 'red': 'blue'
  };

  return <span style={ style }>{ label }</span>
};

export default ListItems;