import React, { Component } from 'react'

// class Filter extends Component{
//     render() {
//         const {filter, clickFilter} = this.props

//         return(
//             <span
//                 className={'Filter ' + (filter.Active ? 'selected' : '')}
//                 onClick={() => clickFilter()}
//             >
//             {filter.name}
//             </span>
//         )
//     }
// }

const Filter = ({filter, clickFilter}) => (
    <span
        className={'Filter ' + (filter.Active ? 'selected' : '')}
        onClick={() => clickFilter()}
    >
        {filter.name}
    </span>
)

export default Filter
