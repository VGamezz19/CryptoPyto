import React, { Component } from 'react';
function ColChart(props){
/*<td><img style={{width: '70%'}} src="./img/graficaDesign.png" alt="chart" /></td>*/
        return(
             <td>{props.chartValue.price_usd}</td>
        )
    
}
export default ColChart