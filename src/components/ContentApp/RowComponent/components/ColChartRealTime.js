import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
function ColChartRealTime(props){
/*<td><img style={{width: '70%'}} src="./img/graficaDesign.png" alt="chart" /></td>*/

const data = {
    columns: [
      ['coin', ...props.chartValueRealTime]
    ]
  };
        return(
             <td class ='char-real'><C3Chart data={data} size={{height:200}}/></td>
        )
    
}
export default ColChartRealTime