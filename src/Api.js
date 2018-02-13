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

/*cryptoApi.getCoins().then(res=>showResult(res))

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
/*FUNCIONA

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

*/

/*SIMPLIFICANDO Y ELIMINANDO REPETICIONES*/

let cryptoApi; let CryptoHistorical;
(function () {
    
    let coin = "BTC";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const baseUrl = "https://api.coinmarketcap.com/v1/ticker"
    const preHistoricalPriceURL = "https://min-api.cryptocompare.com/data/histominute?fsym=" + coin + "&tsym=EUR&limit=20&aggregate=3&e=CCCAGG"

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
        preHistoricalPriceURL,
        call: function () {
            return fetch(proxyurl + preHistoricalPriceURL)
                .then(res => res.json())
                this.call().then(res => res)
        },
    }

})()

cryptoApi.getCoins().then(res => showResult(res))
CryptoHistorical.call().then(res => showResult(res))

function showResult(data) {
    console.log(data)
}
export default cryptoApi;
/*PROBANDO A METER COIN EN EL CALL


let cryptoApi; let CryptoHistorical;
(function () {
    
    
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const baseUrl = "https://api.coinmarketcap.com/v1/ticker"
    const preHistoricalPriceURL = "https://min-api.cryptocompare.com/data/histominute?fsym=" + coin  
    const postHistoricalPriceURL = "&tsym=EUR&limit=20&aggregate=3&e=CCCAGG"

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
        preHistoricalPriceURL,

        coin:"USD",
        call: function () {
            return fetch(proxyurl + preHistoricalPriceURL+this.coin+postHistoricalPriceURL)
                .then(res => res.json())
                this.call().then(res => res)
        },
    }

})()

cryptoApi.getCoins().then(res => showResult(res))
CryptoHistorical.call().then(res => showResult(res))

function showResult(data) {
    console.log(data)
}

}

}
*/

