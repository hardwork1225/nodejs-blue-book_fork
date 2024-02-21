import React, { Component } from 'react';
import Item from './Item';

export default class Body extends Component {
  render() {
    const { todos, updateItem, deleteItem } = this.props;
    return (
      <div>
        <ul>
          {todos.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                updateItem={updateItem}
                deleteItem={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
