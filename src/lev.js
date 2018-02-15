

let arrayResults = [];
//Results constructor
function ConstructCryptoList(name, value) {
  this.name = name;
  this.value = value;
}

App = {

  cryptoListArray: ["ETH", "BTC", "IOTA", "Ripple", "MRW"],
  //Sort crypto currencys
  sortCryptoList: () => arrayResults.sort(function (a, b) {
    return a.value - b.value
  }),
  //Levenstein distance method
  levenstein: (string1) => {
    let i = 0;
    cryptoListArray = App.cryptoListArray;
    let row2 = [];

    while (i != cryptoListArray.length) {
      string2 = cryptoListArray[i];

      if (string1 === string2) {
        return 0;
      } else {

        let s1_length = string1.length, s2_length = string2.length;

        if (s1_length && s2_length) {

          let i1 = 0, i2 = 0, a, b, c, c2, row = row2;
          //First word n array
          while (i1 < s1_length)
            row[i1] = ++i1;

          while (i2 < s2_length) {
            //returns ascii code of second word
            c2 = string2.charCodeAt(i2);
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
          arrayResults[i] = new ConstructCryptoList(cryptoListArray[i], b);

        } else {
          return s1_len + s2_len;
        }
      }
      i++;
    }
  }

}

//HACIÉNDOLA SELF

//const tres = (function () {

  let arrayResults = [];
//Results constructor
function ConstructCryptoList(name, value) {
  this.name = name;
  this.value = value;
}


App = {

  //Sort crypto currencys
  sortCryptoList: () => arrayResults.sort(function (a, b) {
    return a.value - b.value
  }),
  //Levenstein distance method
  levenstein: (string1) => {
    let i = 0;
    cryptoListArray = App.cryptoListArray;
    let row2 = [];

    while (i != cryptoListArray.length) {
      string2 = cryptoListArray[i];

      if (string1 === string2) {
        return 0;
      } else {

        let s1_length = string1.length, s2_length = string2.length;

        if (s1_length && s2_length) {

          let i1 = 0, i2 = 0, a, b, c, c2, row = row2;
          //First word n array
          while (i1 < s1_length)
            row[i1] = ++i1;

          while (i2 < s2_length) {
            //returns ascii code of second word
            c2 = string2.charCodeAt(i2);
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
          arrayResults[i] = new ConstructCryptoList(cryptoListArray[i], b);

        } else {
          return s1_len + s2_len;
        }
      }
      i++;
    }
  }

}
App.cryptoListArray = ["ETH", "BTC", "IOTA", "Ripple", "MRW"];

//})();