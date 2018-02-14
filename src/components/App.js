import React, { Component } from 'react';
import cryptoApi from '../API-Cli/cryptoApi.js';
import C3Chart from 'react-c3js';
import RowComponent from './RowComponent/RowComponent'
import Loader from './Loader/Loader'
import IconsRow from './IconRow/IconsRow'

class App extends Component {
  constructor() {
    super()
    this.state = {
      dataCoins : [],
      coinsShow: [],
      lengthCoin: 2
    }
  }

  componentDidMount = () => cryptoApi.getCoins()
                                              .then(res => this.setState({dataCoins : res}))
                                              .then(res => this.setState({
                                                coinsShow: this.state.dataCoins.filter((coin, index) => index <= this.state.lengthCoin)
                                              }))
  

  componentWillReceiveProps(newProps) {
    this.setState({lengthCoin:newProps.moreCoins})
  }

  // componentDidUpdate(nextProps, nextState){
  //   console.log(nextState)

  // }

  // componentWillUpdate(nextProps, nextState) {
  //   //console.log("UpdateadoComponent")

  //   this.setState((prevState) => {
  //     chartData: prevState.chartData.push(prevState.arrayResult[0].price_usd)
  //     console.log(nextState.arrayResult[0].price_usd)
  //   })
  // }

  render() {

    console.log(this.state)
    return (
      <div>
        <section className='app-content'>
        <table>
          <tbody>

            <tr className='trHeader'>
              <th>COINS</th>
              <th>PRICE</th>
              <th>7D CHART (USD)</th>
              <th>CHG. 24H</th>
            </tr>
            {this.state.coinsShow.length < 1 ? <Loader /> : this.state.coinsShow.map(coin => <RowComponent dataCoin={coin}/>) }
          </tbody>
        </table>
      </section>
        <div class = 'template-rowIcon'>
          <IconsRow/>
        </div>
      </div>
    );
  }
}

export default App;