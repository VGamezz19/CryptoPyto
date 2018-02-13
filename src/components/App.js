import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import cryptoApi from '../Api.js';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
        arrayResult:[],
        chartData:[]
    }
  }

  // Antes del renderizado nos traemos los datos
  componentWillMount = () => {
    console.log("WillMount")
    cryptoApi.getCoins()
    .then(res => this.setState({arrayResult:res}))
  }

// Para obtener un flujo de datos a tiempo real necesitamos realizar la petición a la API cada x segundos
  componentDidMount = () => {
    console.log("YaDidMount")
    setInterval(()=> {
      cryptoApi.getCoins()
      .then(res => this.setState({arrayResult:res}))
    }, 10000); 
  }
  
  //res => this.setState({arrayResult:res})

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  componentWillUpdate(nextProps, nextState){
    console.log("UpdateadoComponent")
    
    this.setState((prevState)=>{
      chartData: prevState.chartData.push(prevState.arrayResult[0].price_usd)
    //console.log(nextState.arrayResult[0].price_usd)
     })
  }




  render() {
    console.log(this.state)
    console.log("SoyRender")
    const data = {
      columns: [

        this.state.chartData
      ]
    };
    console.log(data)


    /*this.state.arrayResult.map((cash)=>{
      console.log(cash)
    })*/

    //console.log("Hola",this.state.arrayResult[0])// me devuelve el primer objeto del array {id:bitcoin,:price_usd:300}
    return (  
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <C3Chart data={data} />
      </div>
    );
  }
}

export default App;