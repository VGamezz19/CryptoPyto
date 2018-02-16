import React, { Component } from 'react';
import C3Chart from 'react-c3js';
function ColChart(props){
  
const data = {
    columns: [
      ['coin', ...props.chartValueHistorical]
    ]
  };
        return(
          <td ><C3Chart 
          axis={{
            y: {
              tick: {
                format: (e) => e.toFixed(4)
              }
            },
          }} 
         data={data} size={{height:200}}/></td>
        )
    
}
export default ColChart