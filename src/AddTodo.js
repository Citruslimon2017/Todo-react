import React, { Component } from 'react'

import './AddTodo.css'

class AddTodo extends Component {
    constructor(){
        super()
        this.state = {
            inputValue:''
        }
    }
    handleKeyPress(e){
        if(e.key==='Enter'){
            const inputValue = e.target.value
            if(inputValue === '') return
            this.props.addTodoItem(e.target.value)
            this.setState({
                inputValue:''
            })
        }
    }
    handleChange(e){
        const newValue = e.target.value
        this.setState({
            inputValue: newValue
        })
    }
    render (){
        return(
            <div>
                <input 
                className='addTodo'
                value={this.state.inputValue} 
                type='text' 
                placeholder='What need to bo done?' 
                onKeyPress={this.handleKeyPress.bind(this)} //回车
                onChange={this.handleChange.bind(this)}
                />
            </div>
        )
    }
}
export default AddTodo
