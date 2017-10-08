import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Left.css'

const LeftItems = ({todos_redux}) => {
    const leftTodos = todos_redux.filter(item => !item.Checked)
    
    return(
        <span className='Left'>{leftTodos.length} items left</span>
    )
}

const mapStateToProps = (state) => {
    return{
        todos_redux: state.todos
    }
}

export default connect(mapStateToProps, null)(LeftItems)
