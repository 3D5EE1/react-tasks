import React, { Component } from 'react';
import './list-items.css'

export default class ListItems extends Component {

  state =  {
    done: false,
    important: false,
    text: false
  };

  openText = () => {
    this.setState((state) => {
        return {
            text: !state.text,
        }
    })
  };

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done,
      }
    })
  };

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important,
      }
    })
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important, text } = this.state;

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
        <span className={ stickerClass } onClick={ this.onLabelClick }>{ label }</span>
        <div className='sticker-button-panel'>
          <button type='button' className='open-label' onClick={ this.openText}>
            <i className='' />
          </button>
          <button type='button' className='important' onClick={ this.onMarkImportant }>
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
