
console.log("HOLA AMIGOS")

class CryptoApi {
    constructor() {
        this.proxyurl="https://cors-anywhere.herokuapp.com/"
    }
    

    __call(path)  {
        return  fetch(path)
                .then(res => res.json())
    }

    getCoins() {
        return this.__call(`${this.proxyurl}https://api.coinmarketcap.com/v1/ticker`)
    }

    getCoinHistorical(coin = false) {
        if(!coin) throw new Error ('getCoinHistorical(...) <-- need coin to search...')
        let url = `https://min-api.cryptocompare.com/data/histominute?fsym=${coin}&tsym=EUR&limit=20&aggregate=3&e=CCCAGG`
        return this.__call(this.proxyurl + url)
    }

    getCoinLastHistory(coin = false) {
        if(!coin) throw new Error ('getCoinLastHistory(...) <-- need coin to search...')
        let url = `https://min-api.cryptocompare.com/data/histominute?fsym=${coin}&tsym=EUR&limit=0&aggregate=3&e=CCCAGG`
        return this.__call(this.proxyurl + url)
    }
}

var cryptoApi = new CryptoApi()
console.log("Hey")

if (typeof module !== 'undefined')
    module.exports = cryptoApi