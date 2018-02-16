import React, { Component } from 'react';
function ColPrice(props) {
    return (
        props.priceValue.length < 2 ? <td> <span className= 'equal'> {props.priceValue[0]} </span></td> : (props.priceValue[0] - props.priceValue[1]) === 0 ? <td> <span className= 'equal'> {props.priceValue[0]} </span></td> : (props.priceValue[0] - props.priceValue[1]) < 0 ? <td> <span className= 'down'> {props.priceValue[0]} </span></td>: <td> <span className= 'up'> {props.priceValue[0]} </span></td>
    )
}

export default ColPrice