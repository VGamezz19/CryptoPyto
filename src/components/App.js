import React, { Component } from 'react';
import cryptoApi from '../API-Cli/cryptoApi.js';
import C3Chart from 'react-c3js';
import RowComponent from './RowComponent/RowComponent'
import Loader from './Loader/Loader'

class App extends Component {
  constructor() {
    super()
    this.state = {
      arrayResult: [],
      chartData: []
    }
  }

  // Antes del renderizado nos traemos los datos
  componentWillMount = () => {
    //console.log("WillMount")
    cryptoApi.getCoins()
      .then(res => this.setState({ arrayResult: res }))
  }

  // Para obtener un flujo de datos a tiempo real necesitamos realizar la petición a la API cada x segundos
  // componentDidMount = () => {
  //   //console.log("YaDidMount")
  //   setInterval(() => {
  //     cryptoApi.getCoins()
  //       .then(res => this.setState({ arrayResult: res }))
  //   }, 50000);
  // }

  //res => this.setState({arrayResult:res})

  // componentWillUnmount() {
  //   clearInterval(this.interval)
  // }

  componentWillUpdate(nextProps, nextState) {
    //console.log("UpdateadoComponent")

    this.setState((prevState) => {
      chartData: prevState.chartData.push(prevState.arrayResult[0].price_usd)
      console.log(nextState.arrayResult[0].price_usd)
    })
  }


  render() {
    //console.log(this.state)
    //console.log("SoyRender")
    const data = {
      columns: [
        this.state.chartData
      ]
    };
    //console.log(data)


    /*this.state.arrayResult.map((cash)=>{
      console.log(cash)
    })*/

    //console.log("Hola",this.state.arrayResult[0])// me devuelve el primer objeto del array {id:bitcoin,:price_usd:300}
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <C3Chart data={data} />
      </div>*/

      // <section className='app-content' id='roow'>
      //   <table>
      //     <tbody>

      //       <tr className='trHeader'>
      //         <th>COINS</th>
      //         <th>PRICE</th>
      //         <th>7D CHART (USD)</th>
      //         <th>CHG. 24H</th>
      //       </tr>
      //       <RowComponent />
      //       <RowComponent />
      //       <RowComponent />

      //     </tbody>
      //   </table>
      // </section>
      <Loader/> 
       );
  }
}

export default App;