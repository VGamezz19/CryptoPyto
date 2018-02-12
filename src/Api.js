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