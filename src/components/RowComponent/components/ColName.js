import React, { Component } from 'react';
function ColName(props){
    
        return(
        <td>
            <img src="./img/1-bitcoin.png" alt="imgcoin"/>
            <h4>{props.nameValue.id}%</h4>
        </td> 
        ) 
}
export default ColName