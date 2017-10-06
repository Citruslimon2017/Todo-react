import React, { Component } from 'react'

import { connect } from 'react-redux'
import { toggleAll } from './actions'

import './AllChecked.css'

class AllChecked extends Component {
    render(){
        const { todos_redux: todos, toggleAll_redux } = this.props
        const allChecked = todos.every(item => item.Checked)

        return(
            <div>
                <input 
                    className='AllChecked'
                    type='checkbox' 
                    checked={allChecked} 
                    onChange = {(e) => 
                        toggleAll_redux(e.target.checked)}
                />
            </div>
        )   
    }
}

const mapStateToProps = (state) => {
    return {
        todos_redux: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        toggleAll_redux: (isChecked) => {
            dispatch(toggleAll(isChecked))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllChecked) 
