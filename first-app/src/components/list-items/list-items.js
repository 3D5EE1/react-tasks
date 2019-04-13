import React, { Component } from 'react';
import './list-items.css'

export default class ListItems extends Component {

  // constructor(props) {
  //   super(props);
  //
  //   this.onLabelClick = () => {
  //     alert(`Done: ${this.props.label}`)
  //   };
  // }

  state =  {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    })
  };

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important
      }
    })
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let stickerClass = 'sticker-list';
    if (done) {
        stickerClass += ' sticker-list-done';
    }

    if (important) {
        stickerClass += ' sticker-important'
    }

    // const style = {
    //   color: important ? 'blue' : 'black',
    //   fontWeight: important ? 'bold' : 'normal'
    // };

    return (
      <span>
        <span className={ stickerClass } onClick={ this.onLabelClick }>
        { label }
        </span>
        <button type='button' className='' onClick={ this.onMarkImportant }>
          <i className='' />
        </button>
        <button type='button' className='' onClick={ onDeleted }>
          <i className='' />
        </button>
      </span>
    )
  };
}
