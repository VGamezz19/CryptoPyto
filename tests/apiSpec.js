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

    
    describe('Retrieve', () => {
      let coin = "BTC";
      beforeEach(done =>
        cryptoApi.getCoinHistorical(coin)
          .then(_coin => {
            coin = _coin
  
            done()
          })
          .catch(done)
      )
  
      it('should retrieve last 20 coins historial', () => {
        expect(coin).not.toBeUndefined()
  
        expect(coin.Data.length === 21).toBeTruthy()
      })
    })

    
    describe('Retrieve', () => {
      let coin = "BTC";
      beforeEach(done =>
        cryptoApi.getCoinLastHistory(coin)
          .then(_coin => {
            coin = _coin
  
            done()
          })
          .catch(done)
      )
  
      it('should retrieve last two coin data values', () => {
        expect(coin).not.toBeUndefined()
  
        expect(coin.Data.length === 2).toBeTruthy()
      })
    })
    
    

  })

  
 
  