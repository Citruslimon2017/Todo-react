import React, { Component } from 'react'

class ClearCompleted extends Component {
    render(){
        const {clearCompletedTodos} = this.props

        return(
            <div onClick={() => clearCompletedTodos()}>Clear Completed</div>
        )
    }
}

export default ClearCompleted
