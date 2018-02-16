//proxyurl="https://cors-anywhere.herokuapp.com/"
console.log("entra en el spec")

describe('CryptoCoins API', () => {
    describe('Search', () => {

      let coin ="BTC"

      beforeEach(done =>
        cryptoApi.getCoins()
          .then(_coin => {
            coin = _coin
  
            done()
          })
          .catch(done)
      )
  
      it('should get results on search', () => {
        expect(coin).not.toBeUndefined()
  
        expect(coin.length > 0).toBeTruthy()
      })
    })

  })