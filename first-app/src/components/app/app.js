import React, { Component } from 'react';
import './app.css'

import Header from '../sticker-header'
import Search from '../sticker-search-panel'
import List from '../list'
import ListAddItem from "../list-add-item";
import ItemsStatus from "../list-items-status"

export default class App extends Component {

  maxId = 1000;

  state = {
    localStorage: [
      this.createItems("Drink Coffee"),
      this.createItems("Drink Tee"),
      this.createItems("Drink Beer"),
    ],
    term: '',
    filter: 'all'
  };

  createItems(label) {
      return {
          label,
          important: false,
          done: false,
          id: this.maxId++
      }
  }

  deleteItems = (id) => {
    this.setState(({ localStorage })=> {
      const index = localStorage.findIndex((el) => el.id === id);
      const newArrow = [ ...localStorage.slice(0, index), ...localStorage.slice(index + 1)];

      return {localStorage: newArrow};
    })
  };

  addItem = (newLabel) => {
      const newItem = this.createItems(newLabel);

      this.setState(({localStorage}) => {
          const newArrow = [...localStorage, newItem];

          return {
              localStorage: newArrow
          }
      })
  };

  toggleProperty(arr, id, propName) {
      const index = arr.findIndex((el) => el.id === id);
      const oldItem = arr[index];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};

      return [
          ...arr.slice(0, index),
          newItem,
          ...arr.slice(index+1)
      ]
  }

  onToggleImportant = (id) => {
      this.setState(({ localStorage }) => {
          return {
              localStorage: this.toggleProperty(localStorage, id, 'important')
          }
      })
  };

  onToggleDone = (id) => {
      this.setState(({ localStorage }) => {
          return {
              localStorage: this.toggleProperty(localStorage, id, 'done')
          }
      })
  };

  search(items, term) {
    if (term.length === 0) {
        return items;
    }

    return items.filter((item) => {
        return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  onSearchChange = (term) => {
    this.setState({term});
  };

  onFilterChange = (filter) => {
    this.setState({filter});
  };

  filter = (items, filter) => {
      switch (filter) {
          case 'all':
              return items;
          case 'active':
              return items.filter((item) => !item.done);
          case 'done':
              return items.filter((item) => item.done);
          default:
              return items;
      }
  };

  render () {

    const {localStorage, term, filter} = this.state;

    const visibleItems = this.filter(this.search(localStorage, term), filter);

    const doneCount = localStorage.filter((el) => el.done).length;

    const todoCount = localStorage.length - doneCount;

    return (
      <div className='content'>
        <Header toDo={todoCount} done={doneCount}/>
        <ItemsStatus filter={filter} onFilterChange={this.onFilterChange}/>
        <div>
          <Search onSearchChange={this.onSearchChange}/>
        </div>

        <List localData={visibleItems}
              onDeleted={ this.deleteItems }
              onToggleImportant={this.onToggleImportant}
              onToggleDone={this.onToggleDone}
        />
        <ListAddItem onItemAdded={this.addItem }/>
      </div>
    )
  }
};
