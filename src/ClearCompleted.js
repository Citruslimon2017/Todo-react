import React, { Component } from 'react'

import './Clear.css'

class ClearCompleted extends Component {
    render(){
        const {clearCompletedTodos} = this.props

        return(
            <span className='ClearCompleted' onClick={() => clearCompletedTodos()}>Clear Completed</span>
        )
    }
}

export default ClearCompleted
