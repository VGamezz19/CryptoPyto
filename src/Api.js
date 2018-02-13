/*LLAMADAS DIVIDIDAS

let cryptoApi;
(function(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const baseUrl = "https://api.coinmarketcap.com/v1/ticker"
    cryptoApi = {
        baseUrl,
        call: function () {  
            return fetch(proxyurl+baseUrl)     
                    .then(res => res.json())
        },
        getCoins: function () {
            return this.call().then(res =>res )
        }
    }
})()

cryptoApi.getCoins().then(res=>showResult(res))

function showResult(data){
    console.log(data)
}

//Segunda llamada 

let CryptoHistorical;
(function(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const baseUrl = "https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=USD&limit=20&aggregate=3&e=CCCAGG"
    CryptoHistorical = {
        baseUrl,
        call: function () {  
            return fetch(proxyurl+baseUrl)     
                    .then(res => res.json())
        },
        DataForGraphics: function () {
            return this.call().then(res =>res )
        }
    }
})()

CryptoHistorical.DataForGraphics().then(res=>showResult(res))

function showResult(data){
    console.log(data)
}

*/

//LLAMADAS DE LAS DOS APIS COMBINADAS

let cryptoApi; let CryptoHistorical;
(function () {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const baseUrl = "https://api.coinmarketcap.com/v1/ticker"
    const baseHistoricalUrl = "https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=USD&limit=20&aggregate=3&e=CCCAGG"
   
    cryptoApi = {
        baseUrl,
        call: function () {
            return fetch(proxyurl + baseUrl)
                .then(res => res.json())
        },
        getCoins: function () {
            return this.call().then(res => res)
        }
    }

    CryptoHistorical = {
        baseHistoricalUrl,
        call: function () {
            return fetch(proxyurl + baseHistoricalUrl)
                .then(res => res.json())
        },
        DataForGraphics: function () {
            return this.call().then(res => res)
        }
    }
})()

cryptoApi.getCoins().then(res => showResult(res))
CryptoHistorical.DataForGraphics().then(res => showResult(res))

function showResult(data) {
    console.log(data)
}





