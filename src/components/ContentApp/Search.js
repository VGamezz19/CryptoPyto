
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


//   //Sort crypto currencys
//   sortCryptoList = (array) =>  {
//       return array.sort(function (a, b) {
//         return a.b - b.b
//       })
//   }
//   //Levenstein distance method
//   levenstein = (string1) => {
//     let i = 0;
//     let row2 = [];
//     let arrayCalcu =  []
//     while (i != this.state.cryptoListArray.length) {
//       let string2 = this.state.cryptoListArray[i];

//       if (string1 === string2.name) {
//         return 0;
//       } else {

//         let s1_length = string1.length, s2_length = string2.name.length;

//         if (s1_length && s2_length) {

//           let i1 = 0
//           let i2 = 0 
//           let a = 0, b = 0, c = 0, c2 = 0, row = row2;
//           //First word n array
//           while (i1 < s1_length)
//             row[i1] = ++i1;

//           while (i2 < s2_length) {
//             //returns ascii code of second word
//             c2 = string2.name.charCodeAt(i2);
//             a = i2;
//             ++i2;
//             b = i2;
//             for (i1 = 0; i1 < s1_length; ++i1) {
//               //Compare ascii code between two words
//               c = a + (string1.charCodeAt(i1) === c2 ? 0 : 1);
//               a = row[i1];
//               //set result
//               b = b < a ? (b < c ? b + 1 : c) : (a < c ? a + 1 : c);
//               row[i1] = b;
//             }
//           }
//           //Result constructor instance 

//             arrayCalcu.push({
//               name: this.state.cryptoListArray[i].id, 
//               b:b,
//               img: this.state.cryptoListArray[i].img
//             })

//         } else {
//           return s1_length + s2_length;
//         }
//       }
//       i++;
//     }
//     this.setState (prevState =>{
//       return {
//         arrayResults: prevState.arrayResults.concat(this.sortCryptoList(arrayCalcu))
//       }
//     })
//   }
//  ConstructCryptoList = ( name, value, img)  => {
//     this.name = name;
//     this.value = value;
//     this.img = img
//   }

//     render(){
//         return(


//         )
//     }
// }
