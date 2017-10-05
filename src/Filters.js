import React, { Component } from 'react'

import './Filters.css'

class Filters extends Component{
    render(){
        const { filters, switchFilter } = this.props

        return(
            <div className='filters'>
                {
                    filters.map((filter,index) => 
                        <span 
                            className={'Filter ' + (filter.Active ? 'selected' : '')}
                            key={index} 
                            onClick={() => switchFilter(index)}
                        >
                            {filter.name}
                        </span>
                    )
                }
            </div>
        )
    }
}

export default Filters
