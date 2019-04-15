import React, { Component } from 'react';
import './list-items.css'

export default class ListItems extends Component {

  state =  {
    text: false
  };

  openText = () => {
    this.setState((state) => {
        return {
            text: !state.text,
        }
    })
  };

  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important,  } = this.props;
    const { text } = this.state;

    let openText = 'sticker-label-text';
    if (text) {
        openText += ' text-open';
    }

    let stickerClass = 'sticker-list';
    if (done) {
        stickerClass += ' sticker-list-done';
    }

    if (important) {
        stickerClass += ' sticker-important'
    }

    return (
      <span>
        <span className={ stickerClass } onClick={ onToggleDone  }>{ label }</span>
        <div className='sticker-button-panel'>
          <button type='button' className='open-label' onClick={ this.openText}>
            <i className='' />
          </button>
          <button type='button' className='important' onClick={ onToggleImportant }>
            <i className='fa fa-exclamation' />
          </button>
          <button type='button' className='deleted' onClick={ onDeleted }>
            <i className='fa fa-trash-o' />
          </button>
        </div>
        <textarea className={ openText } placeholder="информация..."/>
      </span>
    )
  };
}
