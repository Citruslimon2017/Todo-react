import React, { Component } from 'react'

class LeftItems extends Component {
    render(){
        const { todos } = this.props
        const leftTodos = todos.filter(item => !item.Checked)

        return(
            <div>{leftTodos.length} items left</div>
        )
    }
}

export default LeftItems
