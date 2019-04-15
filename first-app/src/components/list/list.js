import React, {Component} from 'react';
import ListItems from '../list-items/list-items'

export default class List extends Component {

  render() {
    const { localData, onDeleted, onToggleImportant, onToggleDone } = this.props;

    const data = localData.map((element) => {
      const { id, ...elementProps } = element;

      return (
        <li key={id}>
          <ListItems { ...elementProps }
                     onDeleted={() => onDeleted(id)}
                     onToggleImportant = {() => onToggleImportant(id)}
                     onToggleDone = {() => onToggleDone(id)}
          />
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
  }
}
