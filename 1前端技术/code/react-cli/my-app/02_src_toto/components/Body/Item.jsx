import React, { Component } from 'react';

export default class Item extends Component {
  state = {
    mouse: false,
  };

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  handleCheck = (id) => {
    return (event) => {
      this.props.updateItem(id, event.target.checked);
    };
  };

  handleDelete = (id) => {
    return (event) => {
      this.props.deleteItem(id);
    };
  };

  render() {
    const { id, name, done } = this.props.item;
    const { mouse } = this.state;
    return (
      <div>
        <li
          onMouseLeave={this.handleMouse(false)}
          onMouseEnter={this.handleMouse(true)}
          style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
        >
          <label>
            <input
              type="checkbox"
              defaultChecked={done}
              onChange={this.handleCheck(id)}
            />
            <span>{name}</span>
          </label>
          <button
            style={{ display: mouse ? 'inline-block' : 'none' }}
            onClick={this.handleDelete(id)}
          >
            删除
          </button>
        </li>
      </div>
    );
  }
}
