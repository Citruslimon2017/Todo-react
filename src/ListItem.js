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
            <div> 
                <input type='checkbox' 
                    checked={item.Checked} 
                    onChange={this.handleToggle.bind(this)}
                />
                <span>{ item.value } </span>
            </div>
        )
    }
}

export default ListItem
