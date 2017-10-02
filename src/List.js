import React,{ Component } from 'react'

import ListItem from './ListItem'


// {this.state.todos.map(item => <div>{item.value} {item.name}</div>)}

class List extends Component {
    constructor(){
        super()
        this.state = {
            todos: [
                {
                    value: 'item 01',
                    name: 'aa'
                },
                {
                    value: 'item 02',
                    name: 'bb'
                }
            ]
        }
    }
    render () {
        return (
            <div>
                {this.state.todos.map( item => <ListItem value={item.value} name={item.name}/> )}
            </div>
        )
    }
}

export default List