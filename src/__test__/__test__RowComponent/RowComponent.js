import React, { Component } from 'react';
import cryptoApi from '../../API-Cli/cryptoApi'
import ColChart from './components/ColChart'
import ColName from './components/ColName'
import ColPrice from './components/ColPrice'
import ColChartRealTime from './components/ColChartRealTime'
import LoaderRow from './components/LoaderRow'

class RowComponent extends Component {
    constructor() {
        super()
        this.state = {
            chartHistory: [],// hemos creado dos estados más, este para la gráfica de historia
            chartRealTime: [],// este estado para la grafica a tiempo real
            priceRealTime:[]
        }
    }

    componentDidMount(){
        cryptoApi.getCoinHistorical(this.props.dataCoin.symbol)
            .then(res => this.setState(prevState => {
                if (res.Response === 'Error') return {
                    chartHistory: 'error'
                }
                let data = res.Data.reverse()
                return {
                    chartHistory: data.map(el => el.close)
                }
            }))
        cryptoApi.getCoinLastHistory(this.props.dataCoin.symbol)
            .then(res => this.setState(prevState => {
                if (res.Response === 'Error')return {
                    chartHistory: 'error'
                }

                setInterval(() => {
                    cryptoApi.getCoinLastHistory(this.props.dataCoin.symbol)
                        .then(res => this.setState(prevState => {
                            return {
                                chartRealTime: [...prevState.chartRealTime, res.Data[0].close],
                                priceRealTime: [res.Data[0].close, ...prevState.priceRealTime]
                            }
                        }))
                }, 15000)

                return {
                    chartRealTime: [...prevState.chartRealTime, res.Data[0].close],
                    priceRealTime: [res.Data[0].close, ...prevState.priceRealTime]
                }
            }))
        
    }

    render() {
        if (this.state.chartHistory.length < 1) {
            return (
                <tr className='rowTr'>
                    <ColName nameValue={this.props.dataCoin} />
                    <LoaderRow />
                </tr>
            )
        }

        if (this.state.chartHistory == 'error') {
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
                <ColPrice priceValue={this.state.priceRealTime} />
                <ColChart chartValueHistorical={this.state.chartHistory} />
                <ColChartRealTime chartValueRealTime={this.state.chartRealTime} />
            </tr>
        )
    }
}
export default RowComponent