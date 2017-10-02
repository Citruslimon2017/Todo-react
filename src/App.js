import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './List'
import AddTodo from './AddTodo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: [
          
      ]
    }
  }
  addTodoItem (item){
    this.setState({
      todos:[...this.state.todos,{value: item, name: ''}]
    })
  }
  render() {
    return (
      <div className="App">
        <AddTodo addTodoItem={this.addTodoItem.bind(this)}/>
        <List todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
