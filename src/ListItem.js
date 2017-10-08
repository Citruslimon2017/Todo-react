import React, { Component }  from  'react'

import './ListItem.css'


// const 定义一个变量

const ListItem = ({item, clickCheckBox, clickDelete}) => (
    <div className={'Item ' + (item.Checked ? 'checked' : '')}> 
        <input
            className='Item_checkbox' 
            type='checkbox' 
            checked={item.Checked} 
            onChange={(e) => clickCheckBox(e.target.checked)}
        />
        <span className='Item_name'>{ item.value } </span>
        <span className='Item_delete' onClick={() => clickDelete()}></span>
    </div>
)

export default ListItem
