import React, { Component } from 'react';
import cryptoApi from '../../API-Cli/cryptoApi'
import ColChart from './components/ColChart'
import ColName from './components/ColName'
import ColPrice from './components/ColPrice'
import ColPercent from './components/ColPercent'
import LoaderNietos from './components/LoaderNietos'

class RowComponent extends Component {

    constructor() {
        super()
        this.state = {
            historicalCoin: [],
            chartCloseData: []
        }
    }

    componentDidMount = () => {
        cryptoApi.getCoinHistorical(this.props.dataCoin.symbol)
            .then(res => this.setState(prevState => {
                return {
                    historicalCoin: res.Data.concat(prevState.historicalCoin),
                    chartCloseData: res.Data.map(el => el.close)
                }
            }))

        setInterval(() => {
            cryptoApi.getCoinLastHistory(this.props.dataCoin.symbol)
                .then(res => this.setState(prevState => {
                    return {
                        historicalCoin: res.Data.concat(prevState.historicalCoin),
                        chartCloseData: [...prevState.chartCloseData, res.Data[0].close]
                    }
                }))
        }, 15000)
    }

    render() {
        if (this.state.chartCloseData.length < 1) {
            return (
                <tr className='rowTr'>
                    <ColName nameValue={this.props.dataCoin} />
                    <LoaderNietos />
                </tr>
            )
        }

        return (
            <tr className='rowTr'>
                <ColName nameValue={this.props.dataCoin} />
                <ColPrice priceValue={this.state.historicalCoin} />
                <ColChart chartValue={this.state.chartCloseData} />
                <ColPercent percentValue={this.state.historicalCoin} />
            </tr>
        )
    }
}
export default RowComponent