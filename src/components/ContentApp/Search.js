
import React, { Component } from 'react';
import SearchInput, { createFilter } from 'react-search-input'
import { CSSTransitionGroup } from 'react-transition-group'
import RowComponent from './RowComponent/RowComponent'
const KEYS_TO_FILTERS = ['name', 'symbol', 'id' ]

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      cryptoListArray: [],
      inputValue: '',
      coinSelect: []
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ cryptoListArray: newProps.dataCoins })
  }

  keepInput = (input) => {
    this.setState({
      inputValue: input
    })
  }

  onClickCoin = (coin) => {
    this.setState(prevState => ({
      inputValue: '',
      coinSelect:  [coin].concat(prevState.coinSelect)
    }))
  }

  render() {
    const filterCoins = this.state.cryptoListArray.filter(createFilter(this.state.inputValue, KEYS_TO_FILTERS))

    if (this.state.cryptoListArray.length < 1 || this.state.coinSelect.length < 1) {
      return (
        <header class='contain-input-search'>
          <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>

            {
              this.state.cryptoListArray.length < 1 ?
                <SearchInput type="text" disabled className="search-input form-control" onChange={this.keepInput} id="inlineFormInputGroupUsername2" placeholder="Search Coin" />
                :
                <SearchInput type="text" className="search-input form-control" onChange={this.keepInput} id="inlineFormInputGroupUsername2" placeholder="Search Coin" />
            }
          </div>
          <div class='contain-select'>
            {
              this.state.inputValue ?
                filterCoins.map(coin => {
                  return (
                    <div className="coins" onClick={() => this.onClickCoin(coin.id)} key={coin.id}>
                      <img src={coin.img} />
                      <h1 className="subject">{coin.id}</h1>
                    </div>
                  )
                })
                :
                ''
            }
          </div>
        </header>
      )
    }

    return (
      <header class='contain-input-search'>
        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text">@</div>
          </div>
          <SearchInput type="text" value={this.state.inputValue} className="search-input form-control" onChange={this.keepInput} id="inlineFormInputGroupUsername2" placeholder="Search Coin" />
        </div>
        <div class='contain-select'>
          {
            this.state.inputValue ?
              filterCoins.map(coin => {
                return (
                  <div className="coins" onClick={() => this.onClickCoin(coin.id)} key={coin.id}>
                    <img src={coin.img} />
                    <h1 className="subject">{coin.id}</h1>
                  </div>
                )
              })
              :
              ''
          }
        </div>
        <section className='app-content'>
          <table>
            <tbody>
              <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {this.state.coinSelect.map(selected => {
                  return this.state.cryptoListArray.map(coin => {
                    if (selected === coin.id) return <RowComponent dataCoin={coin} />
                  })
                })}
              </CSSTransitionGroup>
            </tbody>
          </table>
        </section>

      </header>

    )
  }
}