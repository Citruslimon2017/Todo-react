import React, { Component }  from  'react'

import './ListItem.css'


// const 定义一个变量

class ListItem extends Component {
    handleToggle(e){
        const value = e.target.checked
        this.props.clickCheckBox(value)
    }
    render(){
        const { item } = this.props

        return(
            <div className='Item'> 
                <input
                    className='Item_checkbox' 
                    type='checkbox' 
                    checked={item.Checked} 
                    onChange={this.handleToggle.bind(this)}
                />
                <span className='Item_name'>{ item.value } </span>
                <span className='Item_delete' onClick={() => this.props.clickDelete()}>delete</span>
            </div>
        )
    }
}

export default ListItem
