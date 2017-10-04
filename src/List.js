import React, { Component } from 'react'

import ListItem from './ListItem'


// {this.state.todos.map(item => <div>{item.value} {item.name}</div>)}

class List extends Component {
    constructor() {
        super()
    }
    
    render() {
        const { todos, toggleItem, filters, deleteTodo } = this.props
        const activeFilterName = filters.filter(item => item.Active)[0]['name']
        let finalTodos = todos

        if(activeFilterName === filters[1].name){
            finalTodos = todos.filter(todo => !todo.Checked)
        } else if(activeFilterName === filters[2].name){
            finalTodos = todos.filter(todo => todo.Checked)
        }

        return (
            <div>
                {
                    finalTodos.map((item, index) =>
                        <ListItem
                            key={index}
                            item={item}
                            clickCheckBox={() => toggleItem(index)}
                            clickDelete={() => deleteTodo(index)}
                        />
                    )
                }
            </div>
        )
    }
}

export default List
