import React, { Component } from 'react';
// import cryptoApi from './API-Cli/cryptoApi.';
import cryptoApi from '../../API-Cli/cryptoApi'
import ColChart from './components/ColChart'
import ColName from './components/ColName'
import ColPrice from './components/ColPrice'
import ColPercent from './components/ColPercent'


class RowComponent extends Component {

    constructor() {
        super()
        this.state = {
            historicalCoin: [],
            chartCloseData:[]
        }
    }


    /*componentDidMount = () => {
        setInterval(() => {
            criptoApi.getCoinHistorical()
            .then(res => this.setState({dataCoin:res}))
        },5000)
    }*/
    componentDidMount = () => {
         //Seteamos la data coin, para mostrarle al hijo nameValue el nombre (un condicional para saber que foto...)
         //this.setState({ dataCoin: this.props.dataCoin })
         //La primera llamada el historico de la moneda
         cryptoApi.getCoinHistorical(this.props.dataCoin.symbol)
             .then(res => this.setState(prevState => {
                 return {
                    historicalCoin: res.Data.concat( prevState.historicalCoin ),
                    chartCloseData: res.Data.map(el => el.close)
                 }
             }))
                
         // un set Iterval, con el ultimo historical.
         setInterval(() => {
             cryptoApi.getCoinLastHistory(this.props.dataCoin.symbol)
             .then(res => this.setState(prevState => {
                return {
                   historicalCoin: res.Data.concat( prevState.historicalCoin ),
                   chartCloseData: [res.Data[0].close, ...prevState.chartCloseData]
                }
            }))
         }, 5000)
    }

    // componentWillReceiveProps(newprops) {
       
    // }





    render() {
        //console.log(this.state)
        console.log(this.state.historicalCoin[0])
        return (

            <tr className='rowTr'>
                <ColName nameValue={this.props.dataCoin} />
                <ColPrice priceValue={this.state.historicalCoin} />
                <ColChart chartValue={this.state.historicalCoin} />
                <ColPercent percentValue={this.state.historicalCoin} />
            </tr>
        )
    }
}
export default RowComponent