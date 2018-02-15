
import React, { Component } from 'react';
export default class Search extends Component{ 
    constructor() {
        super()
        this.state = {
            cryptoListArray : [],
            arrayResults : [],
            
            inputValue: ''

        }
    }
    
    componentWillReceiveProps(newProps) {
        this.setState({cryptoListArray: newProps.dataCoins})
    }

    keepInput = (input) =>  {
        this.setState({
          inputValue: input,
          arrayResults : []
        })

        if(this.state.inputValue.length > 2) {
          this.levenstein(this.state.inputValue)
        }
    }

  //Sort crypto currencys
  sortCryptoList = (array) =>  {
      return array.sort(function (a, b) {
        return a.b - b.b
      })
  }
  //Levenstein distance method
  levenstein = (string1) => {
    let i = 0;
    let row2 = [];
    let arrayCalcu =  []
    while (i != this.state.cryptoListArray.length) {
      let string2 = this.state.cryptoListArray[i];

      if (string1 === string2.name) {
        return 0;
      } else {

        let s1_length = string1.length, s2_length = string2.name.length;

        if (s1_length && s2_length) {

          let i1 = 0, i2 = 0, a, b, c, c2, row = row2;
          //First word n array
          while (i1 < s1_length)
            row[i1] = ++i1;

          while (i2 < s2_length) {
            //returns ascii code of second word
            c2 = string2.name.charCodeAt(i2);
            a = i2;
            ++i2;
            b = i2;
            for (i1 = 0; i1 < s1_length; ++i1) {
              //Compare ascii code between two words
              c = a + (string1.charCodeAt(i1) === c2 ? 0 : 1);
              a = row[i1];
              //set result
              b = b < a ? (b < c ? b + 1 : c) : (a < c ? a + 1 : c);
              row[i1] = b;
            }
          }
          //Result constructor instance 
          
            arrayCalcu.push({
              name: this.state.cryptoListArray[i].id, 
              b:b,
              img: this.state.cryptoListArray[i].img
            })

        } else {
          return s1_length + s2_length;
        }
      }
      i++;
    }
    this.setState (prevState =>{
      return {
        arrayResults: prevState.arrayResults.concat(this.sortCryptoList(arrayCalcu))
      }
    })
   // this.setState(prev)
  }
 ConstructCryptoList = ( name, value, img)  => {
    this.name = name;
    this.value = value;
    this.img = img
  }

    render(){
        return(
            <header class='contain-input-search'>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                        <div class="input-group-text">@</div>
                        </div>
                        <input type="text" onChange={(e)=>this.keepInput(e.target.value)} value={this.state.inputValue} class="form-control" id="inlineFormInputGroupUsername2" placeholder="Search Coin"/>
                    </div>
            </header>

        )
    }
}


// //HACIÉNDOLA SELF

// //const tres = (function () {

//   let arrayResults = [];
// //Results constructor



// App = {

// }
// App.cryptoListArray = ["ETH", "BTC", "IOTA", "Ripple", "MRW"];

// //})();