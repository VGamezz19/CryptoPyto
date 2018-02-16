import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import RowComponent from '../RowComponent/RowComponent'
import Loader from './Loader/Loader'
import IconsRow from './IconRow/IconsRow'
import { CSSTransitionGroup } from 'react-transition-group'


export default function ContentCoins(props){
    return (
      <div>

        <section className='app-content'>
          <table>
            <tbody>

              <tr className='trHeader hidden-small-screen'>
                <th>COINS</th>
                <th>PRICE</th>
                <th>HISTORY CHART VALUE</th>
                <th>CHART VALUE (every 15sec)</th>
              </tr>
              
              <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {props.coinsShow.length < 1 ? <Loader /> : props.coinsShow.map(coin => <RowComponent dataCoin={coin}  key={coin.id}/>)}
              </CSSTransitionGroup>
            </tbody>
          </table>
        </section>
        <div class='template-rowIcon'>
          <IconsRow onAddingMoreCoins={props.addingRowIcon} />
        </div>
      </div>
    );
  }