import React, { Component } from 'react';

export default function IconsRow (props) {
    return  <a onClick={()=>props.onAddingMoreCoins()} className='btn-scroll-down scroll skrollable skrollable-between'></a>
}