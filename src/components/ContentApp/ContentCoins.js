import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import RowComponent from './RowComponent/RowComponent'
import Loader from './Loader/Loader'
import IconsRow from './IconRow/IconsRow'
import { CSSTransitionGroup } from 'react-transition-group'


class ContentCoins extends Component {

  render() {
    return (
      <div>

        <section className='app-content'>
          <table>
            <tbody>

              <tr className='trHeader hidden-small-screen'>
                <th>COINS</th>
                <th>PRICE</th>
                <th>7D CHART (USD)</th>
                <th>CHG. 24H</th>
              </tr>
              
              <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {this.props.coinsShow.length < 1 ? <Loader /> : this.props.coinsShow.map(coin => <RowComponent dataCoin={coin}  key={coin.id}/>)}
              </CSSTransitionGroup>
            </tbody>
          </table>
        </section>
        <div class='template-rowIcon'>
          <IconsRow onAddingMoreCoins={this.props.addingRowIcon} />
        </div>
      </div>
    );
  }
}

export default ContentCoins;