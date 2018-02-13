import React, { Component } from 'react';
import ColChart from './components/ColChart'
import ColName from './components/ColName'
import ColPrice from './components/ColPrice'
import ColPercent from './components/ColPercent'
class RowComponent extends Component{
    render(){
        return(
            <tr className='rowTr'>
                <ColName/>
                <ColPrice/>
                <ColChart/>
                <ColPercent/>
            </tr>
        )
    }
}
export default RowComponent