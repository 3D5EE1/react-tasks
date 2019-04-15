import React, {Component} from 'react';

export default class Search extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render () {

        const {term} = this.state;

        return (
            <input type='text'
                className=''
                onChange={this.onSearchChange}
                value={term}
                placeholder='search...'
            />
        )
    }
};

