import React, { Component } from 'react'

import { connect } from 'react-redux'

import './Clear.css'
import { clearCompleted } from './actions'

class ClearCompleted extends Component {
    render(){
        const { todos_redux, clearCompleted_redux } = this.props
        const CompletedTodos = todos_redux.filter(item => item.Checked)
        
        if(CompletedTodos.length === 0) return ''

        return(
            <span 
                className='ClearCompleted '
                onClick={() => clearCompleted_redux()}
            >
                Clear Completed
            </span>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos_redux: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCompleted_redux: () => {
            dispatch(clearCompleted())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearCompleted)
