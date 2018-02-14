import React, { Component } from 'react';
import ColChart from './components/ColChart'
import ColName from './components/ColName'
import ColPrice from './components/ColPrice'
import ColPercent from './components/ColPercent'
import LoaderNiesto from './components/LoaderNietos'
class RowComponent extends Component{
    
    render(){
        console.log(this.props)
        return(
            <tr className='rowTr'>
                <ColName/>
                <LoaderNiesto/>
                {/* <ColPrice/>
                <ColChart/>
                <ColPercent/> */}
            </tr>
        )
    }
}
export default RowComponent