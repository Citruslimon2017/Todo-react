import React, { Component }  from  'react'

import './ListItem.css'

// const 定义一个变量

class ListItem extends Component {
    render(){
        const { value,name } = this.props

        return(
            <div>
                <span class="value"> { value } </span>
                <span class="name"> { name } </span>
            </div>
        )
    }
}

export default ListItem