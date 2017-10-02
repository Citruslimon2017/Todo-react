import React, { Component }  from  'react'

import './ListItem.css'

// const 定义一个变量

class ListItem extends Component {
    render(){
        const { value,name } = this.props

        return(
            <div>
                <span className="value"> { value } </span>
                <span className="name"> { name } </span>
            </div>
        )
    }
}

export default ListItem