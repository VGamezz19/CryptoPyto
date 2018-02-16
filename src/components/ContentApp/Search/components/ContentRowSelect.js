import React, { Component } from 'react'
import RowComponent from '../../RowComponent/RowComponent'
import { CSSTransitionGroup } from 'react-transition-group'

export default function ContentRowSelect(props) {
    return (
        <section className='app-content'>
            <table>
                <tbody>
                    <CSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        {props.coinSelect.map(selected => {
                            return props.cryptoListArray.map(coin => {
                                if (selected === coin.id) return <RowComponent dataCoin={coin} />
                            })
                        })}
                    </CSSTransitionGroup>
                </tbody>
            </table>
        </section>
    )
}