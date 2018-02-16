import React, { Component } from 'react';
import C3Chart from 'react-c3js';
function ColChartRealTime(props) {

  const data = {
    columns: [
      ['coin', ...props.chartValueRealTime]
    ],
    colors: {
      coin: '#ff8000'
    }

  };
  return (
    <td><C3Chart
      data={data}
      size={{ height: 200 }}
      axis={{
        y: {
          tick: {
            format: (e) => e.toFixed(2)
          }
        },
      }} /></td>
  )
}
export default ColChartRealTime