import React, { Component } from 'react';
import cryptoApi from '../API-Cli/cryptoApi.js';
import C3Chart from 'react-c3js';
import RowComponent from './RowComponent/RowComponent'
import Loader from './Loader/Loader'
import IconsRow from './IconRow/IconsRow'
import { CSSTransitionGroup } from 'react-transition-group'
import * as Scroll from 'react-scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dataCoins: [],
      coinsShow: [],
      lengthCoin: 2,
      imgbbdd: []
    }
  }
  componentWillMount() {
    //Scroll.animateScroll.scrollToTop();
    fetch('./img-bbdd.json').then(res => res.json()).then(res => this.setState({ imgbbdd: res }))
  }
  componentDidMount = () => cryptoApi.getCoins()
    .then(res => {
      var newArr = res.map(coin => {
        this.state.imgbbdd.map(img => img.name === coin.name ? coin.img = img.img : '')
        if (coin.img) return coin
        coin.img = './img/defaulticon.png'
        return coin
      })
      return newArr
    })
    .then(res => this.setState({ dataCoins: res }))
    .then(res => this.setState({
      coinsShow: this.state.dataCoins.filter((coin, index) => index <= this.state.lengthCoin)
    }))

  addingRowIcon = () => {
    Scroll.animateScroll.scrollToBottom();

    this.setState(prevState => {
      return {
        lengthCoin: prevState.lengthCoin + 3,
        coinsShow: this.state.dataCoins.filter((coin, index) => index <= prevState.lengthCoin + 3)
      }
    })
  }

  render() {
    console.log(this.state.dataCoins)
    return (
      <div>
        <section className='app-content'>
          <table>
            <tbody>

              <tr className='trHeader hidden-small-screen'>
                <th>COINS</th>
                <th>PRICE</th>
                <th>7D CHART (USD)</th>
                <th>CHG. 24H</th>
              </tr>
              <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {this.state.coinsShow.length < 1 ? <Loader /> : this.state.coinsShow.map(coin => <RowComponent dataCoin={coin} />)}
              </CSSTransitionGroup>
            </tbody>
          </table>
        </section>
        <div class='template-rowIcon'>
          <IconsRow onAddingMoreCoins={this.addingRowIcon} />
        </div>
      </div>
    );
  }
}

export default App;