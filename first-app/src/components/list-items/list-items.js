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

  onLabelClick = () => {
      alert(`Done: ${this.props.label}`)
  };

  render() {
    const { label, important = false } = this.props;

    const style = {
      color: important ? 'blue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <span className='' style={ style } onClick={ this.onLabelClick }>
        { label }
        <button type='button' className=''>
          <i className='' />
        </button>
        <button type='button' className=''>
          <i className='' />
        </button>
      </span>
    )
  };
}
