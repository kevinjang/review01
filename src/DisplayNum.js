import React from 'react'
import {connect} from 'react-redux'
import {add, minus, addTwo, asyncAdd} from './reducers/counter.redux'

@connect(
    state =>({num: state}),
    {add, minus, addTwo, asyncAdd}
)
class DisplayNum extends React.Component{
    render(){
        return <h2>{this.props.num}</h2>
    }
}

export default DisplayNum