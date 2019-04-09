import React, { Component } from 'react';

export default class ItemsStatus extends Component {

    render () {
        return (
            <div>
                <button type='button' className=''>All</button>
                <button type='button' className=''>Active</button>
                <button type='button' className=''>Done</button>
            </div>
        )
    }
}