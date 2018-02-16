import React from 'react';
import ReactDOM from 'react-dom';
import RowComponent from './__test__RowComponent/RowComponent';
const {Response, Request, Headers, fetch} = require('whatwg-fetch');

it('renders without crashing', () => {
  const coin = {
    "24h_volume_usd": "8071290000.0",
    available_supply: "16867925.0",
    id: "bitcoin",
    img: "./img/Bitcoin.png",
    last_updated: "1518780266",
    market_cap_usd: "166229183894",
    max_supply: "21000000.0",
    name: "Bitcoin",
    percent_change_1h: "-0.79",
    percent_change_24h: "1.58",
    percent_change_7d: "19.64",
    price_btc: "1.0",
    price_usd: "9854.75",
    rank: "1",
    symbol: "BTC",
    total_supply: "16867925.0"
  }
  const div = document.createElement('div');
  ReactDOM.render(< RowComponent dataCoin={coin} />, div);
  ReactDOM.unmountComponentAtNode(div);
});