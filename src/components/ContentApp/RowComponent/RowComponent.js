import React, { Component } from 'react';
import cryptoApi from '../../../API-Cli/cryptoApi'
import ColChart from './components/ColChart'
import ColName from './components/ColName'
import ColPrice from './components/ColPrice'
import ColChartRealTime from './components/ColChartRealTime'
import LoaderNietos from './components/LoaderNietos'

class RowComponent extends Component {
    constructor() {
        super()
        this.state = {
            chartHistory: [],// hemos creado dos estados más, este para la gráfica de historia
            chartRealTime: []// este estado para la grafica a tiempo real
        }
    }


    componentDidMount = () => {
        cryptoApi.getCoinHistorical(this.props.dataCoin.symbol)
            .then(res => this.setState(prevState => {
                let data = res.Data.reverse()
                return {
                    chartHistory: data.map(el => el.close)
                }
            }))
        cryptoApi.getCoinLastHistory(this.props.dataCoin.symbol)
            .then(res => this.setState(prevState => {
                return {
                    chartRealTime: [...prevState.chartRealTime, res.Data[0].close]
                }
            }))
        setInterval(() => {
            cryptoApi.getCoinLastHistory(this.props.dataCoin.symbol)
                .then(res => this.setState(prevState => {
                    return {
                        chartRealTime: [...prevState.chartRealTime, res.Data[0].close]
                    }
                }))
        }, 15000)
    }



    render() {

        if (this.state.chartHistory.length < 1) {
            return (
                <tr className='rowTr'>
                    <ColName nameValue={this.props.dataCoin} />
                    <LoaderNietos />
                </tr>
            )
        }

        if (this.state.historicalCoin == 'error') {
            return (
                <tr className='rowTr'>
                    <ColName nameValue={this.props.dataCoin} />
                    <td className='progressLoad'><h1>Sorry...No data found</h1></td>
                </tr>
            )
        }

        return (
            <tr className='rowTr'>
                <ColName nameValue={this.props.dataCoin} />
                <ColPrice priceValue={this.state.chartRealTime} />
                <ColChart chartValueHistorical={this.state.chartHistory} />
                <ColChartRealTime chartValueRealTime={this.state.chartRealTime} />
            </tr>
        )
    }
}
export default RowComponent