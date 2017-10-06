import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListItem from './ListItem'
import { toggleTodo, deleteTodo } from './actions'
import './List.css'


// {this.state.todos.map(item => <div>{item.value} {item.name}</div>)}

class List extends Component {
    render() {
        const { todos_redux: todos, toggleTodo_redux, filters_redux: filters, deleteTodo_redux } = this.props
        const activeFilterName = filters.filter(item => item.Active)[0]['name']
        let finalTodos = todos

        if(activeFilterName === filters[1].name){
            finalTodos = todos.filter(todo => !todo.Checked)
        } else if(activeFilterName === filters[2].name){
            finalTodos = todos.filter(todo => todo.Checked)
        }

        return (
            <div className='main'>
                {
                    finalTodos.map((item, index) =>
                        <ListItem
                            key={index}
                            item={item}
                            clickCheckBox={() => toggleTodo_redux(index)}
                            clickDelete={() => deleteTodo_redux(index)}
                        />
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => { //把store数据关联到组件
    return {
        todos_redux: state.todos,
        filters_redux: state.filters
    }
}

const mapDispatchToProps = (dispatch) => { //把方法关联到当前组件
    return {
        toggleTodo_redux: (todoIndex) => {
            dispatch(toggleTodo(todoIndex))
        },
        deleteTodo_redux: (todoIndex) =>{
            dispatch(deleteTodo(todoIndex))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
