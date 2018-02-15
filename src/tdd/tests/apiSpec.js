
describe('CryptoCoins API', () => {
  
    let cryp = new cryptoApi()
    describe('Search', () => {

      let coin ="asdasf"

      beforeEach(done =>
        cryp.getCoins('https://api.coinmarketcap.com/v1/ticker')
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