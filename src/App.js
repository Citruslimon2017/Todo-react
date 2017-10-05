import React, { Component } from 'react';
import './App.css';

import List from './List'
import AddTodo from './AddTodo'
import AllChecked from './AllChecked'
import LeftItems from './LeftItems'
import Filters from './Filters'
import ClearCompleted from './ClearCompleted'

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
  toggleItem(itemIndex){ //更改选中的状态
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
  toggleAll(isChecked){ //更改全选或者全不选的状态
    this.setState({
      todos: this.state.todos.map(item =>{
        item.Checked = isChecked
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
  deleteTodo(todoIndex){
    this.setState({
      todos:this.state.todos.filter((todo, index) => todoIndex !== index )
    })
  }
  clearCompletedTodos(){
    this.setState({
      todos: this.state.todos.filter(item => !item.Checked)
    })
  }
  render() {
    return ( //jsx
      <div>
        <div className="App">
          <h1>todos</h1>
          <AllChecked todos={this.state.todos} toggleAll={this.toggleAll.bind(this)}/>
          <AddTodo addTodoItem={this.addTodoItem.bind(this)}/>
          <List 
            todos={this.state.todos} 
            toggleItem={this.toggleItem.bind(this)} 
            filters={this.state.filters}
            deleteTodo={this.deleteTodo.bind(this)}
            />
          <div className='footer' >
            <LeftItems todos={this.state.todos}/>
            <Filters filters={this.state.filters} switchFilter={this.switchFilter.bind(this)}/>
            <ClearCompleted todos={this.state.todos} clearCompletedTodos={this.clearCompletedTodos.bind(this)}/>
          </div>
        </div>
        <footer className='info'>
          <p>
            { 'Created by ' } 
            <a href="https://github.com/Citruslimon2017">liulei</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
