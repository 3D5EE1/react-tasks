import React, {Component} from 'react';
import ListItems from '../list-items/list-items'
import ListAddItem from '../list-add-item/list-add-item'


export default class List extends Component {

  render() {
    const { localData, onDeleted } = this.props;

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
        < ListAddItem />
      </div>
    )
  }
}
