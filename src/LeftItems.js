import React, { Component } from 'react'

import './Left.css'

class LeftItems extends Component {
    render(){
        const { todos } = this.props
        const leftTodos = todos.filter(item => !item.Checked)

        return(
            <span className='Left'>{leftTodos.length} items left</span>
        )
    }
}

export default LeftItems
