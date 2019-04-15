import React, {Component} from 'react';
import './list-add-item.css';

export default class ListAddItem extends  Component {

    state = {
        label: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label)
        this.setState({
            label: ''
        })
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    render() {

        return (
            <form className='list-add-item' onSubmit={ this.onSubmit }>
                <input type="text"
                       className='form'
                       onChange={this.onLabelChange}
                       placeholder='what needs to de done'
                       value={this.state.label}
                />
                <button type='submit'>Add item</button>
            </form>
        );
    }
}