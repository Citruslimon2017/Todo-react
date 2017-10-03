import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './List'
import AddTodo from './AddTodo'
import AllChecked from './AllChecked'
import LeftItems from './LeftItems'
import Filters from './Filters'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: [
          {
            value: '01',
            Checked: true
          },
          {
            value: '02',
            Checked: false
          }
      ],
      filters: [
        {
          name: 'All',
          Active: true
        },
        {
          name: 'Active',
          Active: false
        },
        {
          name: 'Completed',
          Active: false
        }
      ]
    }
  }
  addTodoItem (itemValue){
    this.setState({
      todos:[...this.state.todos,{value: itemValue, Checked: false}]
    })
  }
  toggleItem(itemIndex){
    this.setState({
      todos: this.state.todos.map((item,index) => {
        if(index === itemIndex){
          item.Checked =! item.Checked
          return item
        }else{
          return item
        }
      })
    })
  }
  toggleAll(value){
    this.setState({
      todos: this.state.todos.map(item =>{
        item.Checked = value
        return item
      })
    })
  }
  switchFilter(filterIndex){
    this.setState({
      filters: this.state.filters.map((filter,index) => {
        filter.Active = (index === filterIndex)
        return filter
      })
    })
  }
  render() {
    return (
      <div className="App">
        <AllChecked todos={this.state.todos} toggleAll={this.toggleAll.bind(this)}/>
        <AddTodo addTodoItem={this.addTodoItem.bind(this)}/>
        <List todos={this.state.todos} toggleItem={this.toggleItem.bind(this)} filters={this.state.filters}/>
        <LeftItems todos={this.state.todos}/>
        <Filters filters={this.state.filters} switchFilter={this.switchFilter.bind(this)}/>
      </div>
    );
  }
}

export default App;
