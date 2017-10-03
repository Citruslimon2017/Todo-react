import React, { Component } from 'react'

class Filters extends Component{
    render(){
        const { filters, switchFilter } = this.props
        return(
            <div>
                {
                    filters.map((filter,index) => 
                        <span 
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
