import React, { Component } from 'react'

import './AllChecked.css'

class AllChecked extends Component {
    render(){
        const { todos, toggleAll } = this.props
        const allChecked = todos.every(item => item.Checked)

        return(
            <div>
                <input 
                    className='AllChecked'
                    type='checkbox' 
                    checked={allChecked} 
                    onChange = {(e) => 
                        toggleAll(e.target.checked)}
                />
            </div>
        )   
    }
}

export default AllChecked
