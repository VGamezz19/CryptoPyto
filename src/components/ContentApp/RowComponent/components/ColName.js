import React, { Component } from 'react';
function ColName(props){
    
        return(
        <td>
            <img src={`./img/${props.nameValue.name}.png`} alt="imgcoin"/>
            <h4>{props.nameValue.id}</h4>
        </td> 
        ) 
}
export default ColName