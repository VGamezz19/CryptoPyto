import React, { Component } from 'react';
function ColPrice(props) {
    console.log(props)
    return (
        props.priceValue.length < 1 ? <td>Loading... </td> : (props.priceValue[0].close - props.priceValue[2].close) === 0 ? <td className= 'd-none d-sm-block' >Igual</td> : (props.priceValue[0].close - props.priceValue[2].close) > 0 ?<td className= 'd-none d-sm-block'>Baja </td>:<td className= 'd-none d-sm-block'>Sube </td>
    )
}

export default ColPrice