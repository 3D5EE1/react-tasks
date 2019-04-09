import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'

import Header from '../app-header'
import Search from '../search-panel'
import List from '../list'

const App = () => {

    const localStorage = [
        {id: 1, label: "Drink Coffee", important: false},
        {id: 2, label: "Drink Tee", important: true},
        {id: 3, label: "Drink Bear", important: false},
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

export default App;
