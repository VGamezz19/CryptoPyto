import React, { Component } from 'react';
import cryptoApi from '../../../API-Cli/cryptoApi'
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
                if (res.Response === 'Error') return { historicalCoin: 'error', chartCloseData: 'error' }

                let data = res.Data.reverse()
                setInterval(() => {
                    cryptoApi.getCoinLastHistory(this.props.dataCoin.symbol)
                        .then(res => this.setState(prevState => {
                            return {
                                historicalCoin: prevState.historicalCoin.concat(res.Data),
                                chartCloseData: [...prevState.chartCloseData, res.Data[0].close]
                            }
                        }))
                }, 15000)
                return {
                    historicalCoin: data,
                    chartCloseData: data.map(el => el.close)
                }
            }))
    }

    render() {
        console.log(this.state.chartCloseData)
        if (this.state.chartCloseData.length < 1) {
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
                    <td className ='progressLoad'><h1>Sorry...No data found</h1></td>
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