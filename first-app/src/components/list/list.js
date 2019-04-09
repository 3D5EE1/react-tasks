import React from 'react';
import ListItems from '../list-items/list-items'

const List = ({ localData }) => {

    const data = localData.map((element) => {

        const { id, ...elementProps } = element;

        return (
            <li key={id}>
                <ListItems { ...elementProps }/>
            </li>
        )
    });

    return (
        <div className="sticker">
            <ul>
                { data }
            </ul>
        </div>
    )
};


export default List;