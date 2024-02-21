import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '写代码', done: false },
    ],
  };

  addItem = (todoObj) => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, todoObj],
    });
  };

  updateItem = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((obj) => {
      if (obj.id === id) return { ...obj, done };
      return obj;
    });
    this.setState({
      todos: newTodos,
    });
  };

  deleteItem = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((obj) => {
      return obj.id !== id;
    });
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <Header />
        <Body
          todos={todos}
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
        />
        <Footer addItem={this.addItem} />
      </div>
    );
  }
}
