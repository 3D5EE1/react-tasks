import React from 'react';
import ListItems from '../list-items/list-items'

const List = ({ localData, onDeleted }) => {

    const data = localData.map((element) => {

        const { id, ...elementProps } = element;

        return (
            <li key={id}>
                <ListItems { ...elementProps } onDeleted={() => onDeleted(id)}/>
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