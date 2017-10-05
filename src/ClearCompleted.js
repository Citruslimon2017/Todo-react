import React, { Component } from 'react'

import './Clear.css'

class ClearCompleted extends Component {
    render(){
        const { todos, clearCompletedTodos } = this.props
        const CompletedTodos = todos.filter(item => item.Checked)
        
        if(CompletedTodos.length === 0) return ''

        return(
            <span 
                className='ClearCompleted '
                onClick={() => clearCompletedTodos()}
            >
                Clear Completed
            </span>
        )
    }
}

export default ClearCompleted
