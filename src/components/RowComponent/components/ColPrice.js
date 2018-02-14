import React, { Component } from 'react';
function ColPrice(props) {
    console.log(props)
    return (
        props.priceValue.length < 1 ? <td>Loading... </td> : (props.priceValue[0].close - props.priceValue[2].close) === 0 ? <td>Igual</td> : (props.priceValue[0].close - props.priceValue[2].close) > 0 ?<td>Baja </td>:<td>Sube </td>
    )
}

export default ColPrice