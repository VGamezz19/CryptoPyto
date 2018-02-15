import React, { Component } from 'react';
import Search from './ContentApp/Search'
import ContentCoins from './ContentApp/ContentCoins'
import * as Scroll from 'react-scroll';
import cryptoApi from '../API-Cli/cryptoApi.js';
export default class App extends Component {
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

  render()  {
    return (<span>
      <Search dataCoins={this.state.dataCoins} />
      <ContentCoins addingRowIcon={this.addingRowIcon} coinsShow={this.state.coinsShow} />
    </span>
    )
  }
}