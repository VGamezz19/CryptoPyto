import React, { Component } from 'react';
function ColPrice(props) {
    return (
        props.priceValue.length < 2 ? <td>{props.priceValue[0]}</td> : (props.priceValue[0] - props.priceValue[1]) === 0 ? <td> {props.priceValue[0]} Igual</td> : (props.priceValue[0] - props.priceValue[1]) > 0 ?<td> {props.priceValue[0]} Baja </td>:<td> {props.priceValue[0]} Sube </td>
    )
}

export default ColPrice