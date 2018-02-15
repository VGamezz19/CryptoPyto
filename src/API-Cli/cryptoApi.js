class CryptoApi {
     proxyurl="https://cors-anywhere.herokuapp.com/"

    call = (path) =>  {
        return  fetch(path)
                .then(res => res.json())
    }

    getCoins = () =>  {
        let url = "https://api.coinmarketcap.com/v1/ticker"
        return this.call(this.proxyurl + url)
    }

    getCoinHistorical = (coin = false) => {
        if(!coin) throw new Error ('getCoinHistorical(...) <-- need coin to search...')
        let url = `https://min-api.cryptocompare.com/data/histominute?fsym=${coin}&tsym=EUR&limit=20&aggregate=3&e=CCCAGG`
        return this.call(this.proxyurl + url)
    }

    getCoinLastHistory = (coin = false) => {
        if(!coin) throw new Error ('getCoinLastHistory(...) <-- need coin to search...')
        let url = `https://min-api.cryptocompare.com/data/histominute?fsym=${coin}&tsym=EUR&limit=0&aggregate=3&e=CCCAGG`
        return this.call(this.proxyurl + url)
    }
}
const cryptoApi = new CryptoApi()

export default  cryptoApi