import React, { Component } from 'react';


function ColPercent(props){
        //calc < 1 ? 'Baja' + (1-calc) * 100 + '%' : 'Sube' + (calc-1) * 100 + '%'
        return(
           // props.percentValue.length < 1 ? <td>Loading ...</td>  : (props.percentValue[0].open)/(props.percentValue[0].close) === (props.percentValue[2].open)/(props.percentValue[2].close) ? <td>igual</td> : (props.percentValue[0].open)/(props.percentValue[0].close) > 1 ? <td>Sube</td> : <td>igual</td>

            props.percentValue.length < 1 ? <td>Loading ...</td>  :   (props.percentValue[2].close)/(props.percentValue[0].close)  === 1 ? <td >igual</td> : (props.percentValue[2].close)/(props.percentValue[0].close) > 1 ? <td >Sube</td> : <td >Baja</td>
        )
    
}
//calc=(props.percentValue[0].open)/(props.percentValue[0].close)
export default ColPercent