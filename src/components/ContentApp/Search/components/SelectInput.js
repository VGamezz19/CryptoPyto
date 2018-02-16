import React, {Component} from 'react';

export default function SelectInput(props) {
    return (
        <div class='contain-select'>
            {
              props.inputValue ?
                props.filterCoins.map(coin => {
                  return (
                    <div className="coins" onClick={() => props.onClickCoin(coin.id)} key={coin.id}>
                      <img src={coin.img} />
                      <h1 className="subject">{coin.id}</h1>
                    </div>
                  )
                })
                :
                ''
            }
          </div>
    )
}