import React, { Component } from 'react';
import cryptoApi from '../../API-Cli/cryptoApi.js';
import ColChart from './components/ColChart'
import ColName from './components/ColName'
import ColPrice from './components/ColPrice'
import ColPercent from './components/ColPercent'

class RowComponent extends Component{

    constructor(){
        super()
        this.state = {
           dataCoin: []
        }
    }


   /* componentDidMount = () => {
        setInterval(() => {
            criptoApi.getCoins()
            .then(res => this.setState({dataCoin:res}))
        },5000)
    }*/

    componentWillReceiveProps(newprops) {
        this.setState({dataCoin: newprops.dataCoin})
    }

    render(){


        return(

            <tr className='rowTr'>
                <ColName nameValue ={this.state.dataCoin}/> 
                <ColPrice priceValue = {this.state.dataCoin}/>
                <ColChart chartValue = {this.state.dataCoin}/>
                <ColPercent percentValue = {this.state.dataCoin}/>
            </tr>
        )
    }
}
export default RowComponent