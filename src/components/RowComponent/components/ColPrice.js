import React, { Component } from 'react';
function ColPrice(props) {
    console.log(props.priceValue)
    return (
        props.priceValue.length < 1 ? <td>Loading... </td> : (props.priceValue[0].close - props.priceValue[2].close) === 0 ? <td> {props.priceValue[0].close} Igual</td> : (props.priceValue[0].close - props.priceValue[2].close) > 0 ?<td> {props.priceValue[0].close} Baja </td>:<td> {props.priceValue[0].close} Sube </td>

    )
}

export default ColPrice