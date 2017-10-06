import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Left.css'

class LeftItems extends Component {
    render(){
        const { todos_redux } = this.props
        const leftTodos = todos_redux.filter(item => !item.Checked)

        return(
            <span className='Left'>{leftTodos.length} items left</span>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        todos_redux: state.todos
    }
}

export default connect(mapStateToProps, null)(LeftItems)
