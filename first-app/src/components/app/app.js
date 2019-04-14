import React, { Component } from 'react';
import './app.css'

import Header from '../sticker-header'
import Search from '../sticker-search-panel'
import List from '../list'

export default class App extends Component {

  state = {
    localStorage: [
      {id: 1, label: "Drink Coffee", important: false},
      {id: 2, label: "Drink Tee", important: true},
      {id: 3, label: "Drink Bear", important: false},
    ]
  };

  deleteItems = (id) => {
    this.setState(({ localStorage })=> {
      const index = localStorage.findIndex((el) => el.id === id);
      const newArrow = [ ...localStorage.slice(0, index), ...localStorage.slice(index + 1)];

      return {localStorage: newArrow};
    })
  };

  render () {

    const {localStorage} = this.state;

    return (
      <div className='content'>
        <Header/>
        <div>
          <Search/>
        </div>

        <List localData={localStorage} onDeleted={ this.deleteItems }/>
      </div>
    )
  }
};
