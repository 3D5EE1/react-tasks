import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import Header from './components/app-header'
import Search from './components/search-panel'
import List from './components/list'

const App = () => {

    const localStorage = [
        {id: 1, label: "Drink Coffee", important: true},
        {id: 2, label: "Drink Tee", important: false},
        {id: 3, label: "Drink Bear", important: true},
    ];

    return (
        <div className='content'>
            <Header/>
            <Search/>
            <List localData={localStorage}/>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
