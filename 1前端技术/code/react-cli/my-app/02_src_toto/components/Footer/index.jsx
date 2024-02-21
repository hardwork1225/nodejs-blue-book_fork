import React, { Component } from 'react';

export default class Header extends Component {
  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === '') return;
    this.props.addItem({
      id: new Date().getTime(),
      name: target.value,
      done: false,
    });
    target.value = '';
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="请输入任务"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}
