import React, { Component } from 'react';
import C3Chart, { d2 } from 'react-c3js';

import 'c3/c3.css';
function ColChartRealTime(props) {

  const data = {
    columns: [
      ['coin', ...props.chartValueRealTime]
    ],
    colors: {
      coin: '#ff0000'
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