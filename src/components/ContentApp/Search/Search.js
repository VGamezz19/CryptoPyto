
import React, { Component } from 'react';
import { createFilter } from 'react-search-input'
import InputSearch from './components/InputSearch'
import SelectInput from './components/SelectInput'
import ContentRowSelect from './components/ContentRowSelect'

const KEYS_TO_FILTERS = ['name', 'symbol', 'id']

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
      coinSelect: [coin].concat(prevState.coinSelect)
    }))
  }

  render() {
    const filterCoins = this.state.cryptoListArray.filter(createFilter(this.state.inputValue, KEYS_TO_FILTERS))
    return (
      <header className='contain-input-search'>
        <InputSearch inputValue={this.state.inputValue} cryptoListArray={this.state.cryptoListArray} keepInput={this.keepInput} />
        <SelectInput inputValue={this.state.inputValue} onClickCoin={this.onClickCoin} filterCoins={filterCoins} />
        {this.state.cryptoListArray.length < 1 ? '' : this.state.coinSelect.length < 1 ? '' : <ContentRowSelect coinSelect={this.state.coinSelect} cryptoListArray={this.state.cryptoListArray} />}
      </header>
    )
  }
}