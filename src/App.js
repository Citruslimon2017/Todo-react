import React, { Component } from 'react';
import './App.css';

import List from './List'
import AddTodo from './AddTodo'
import AllChecked from './AllChecked'
import LeftItems from './LeftItems'
import Filters from './Filters'
import ClearCompleted from './ClearCompleted'


class App extends Component {
  // addTodoItem (itemValue){
  //   this.setState({
  //     todos:[...this.state.todos,{value: itemValue, Checked: false}]
  //   })
  // }
  // toggleItem(itemIndex){ //更改选中的状态
  //   this.setState({
  //     todos: this.state.todos.map((item,index) => {
  //       if(index === itemIndex){
  //         item.Checked =! item.Checked
  //         return item
  //       }else{
  //         return item
  //       }
  //     })
  //   })
  // }
  // toggleAll(isChecked){ //更改全选或者全不选的状态
  //   this.setState({
  //     todos: this.state.todos.map(item =>{
  //       item.Checked = isChecked
  //       return item
  //     })
  //   })
  // }
  // switchFilter(filterIndex){
  //   this.setState({
  //     filters: this.state.filters.map((filter,index) => {
  //       filter.Active = (index === filterIndex)
  //       return filter
  //     })
  //   })
  // }
  // deleteTodo(todoIndex){
  //   this.setState({
  //     todos:this.state.todos.filter((todo, index) => todoIndex !== index )
  //   })
  // }
  // clearCompletedTodos(){
  //   this.setState({
  //     todos: this.state.todos.filter(item => !item.Checked)
  //   })
  // }
  render() {
    return ( //jsx
      <div>
        <div className="App">
          <h1>todos</h1>
          <AllChecked/>
          <AddTodo/>
          <List />
          <div className='footer' >
            <LeftItems />
            <Filters />
            <ClearCompleted />
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
