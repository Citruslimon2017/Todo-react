import React, { Component } from 'react'

import { connect } from 'react-redux'
import { switchFilter } from './actions'

import './Filters.css'

class Filters extends Component{
    render(){
        const { filters_redux: filters, switchFilter_redux } = this.props

        return(
            <div className='filters'>
                {
                    filters.map((filter,index) => 
                        <span 
                            className={'Filter ' + (filter.Active ? 'selected' : '')}
                            key={index} 
                            onClick={() => switchFilter_redux(index)}
                        >
                            {filter.name}
                        </span>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        filters_redux: state.filters
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        switchFilter_redux: (filterIndex) => {
            dispatch(switchFilter(filterIndex))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
