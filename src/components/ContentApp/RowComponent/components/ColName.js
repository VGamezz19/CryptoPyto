import React, { Component } from 'react';
function ColName(props){
    
        return(
        <td>
            <img src={`${props.nameValue.img}`} alt="imgcoin"/>
            <h4>{props.nameValue.id}</h4>
        </td> 
        ) 
}
export default ColName