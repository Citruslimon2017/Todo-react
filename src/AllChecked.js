import React, { Component } from 'react'

class AllChecked extends Component {
    render(){
        const { todos, toggleAll } = this.props
        const allChecked = todos.every(item => item.Checked)

        return(
            <div>
                <input 
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
