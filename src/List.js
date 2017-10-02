import React,{ Component } from 'react'

import ListItem from './ListItem'


// {this.state.todos.map(item => <div>{item.value} {item.name}</div>)}

class List extends Component {
    constructor(){
        super()
    }
    render () {
        const { todos } = this.props
        return (
            <div>
                {todos.map( (item, index) => <ListItem key={index} value={item.value} name={item.name}/> )}
            </div>
        )
    }
}

export default List