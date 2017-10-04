import React, { Component }  from  'react'


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
                <span onClick={() => this.props.clickDelete()}>delete</span>
            </div>
        )
    }
}

export default ListItem
