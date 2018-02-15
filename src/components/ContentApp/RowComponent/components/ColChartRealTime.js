import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
function ColChartRealTime(props) {

  const data = {
    columns: [
      ['data2', 50, 20, 10, 40, 15, 25]

    ]
    
  };
  return (
    <td><C3Chart data={data} size={{ height: 200 }} /></td>
  )

}
export default ColChartRealTime