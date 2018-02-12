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

  componentWillMount = () => {
    cryptoApi.getCoins()
    .then(res => this.setState({arrayResult:res}))
  }


  componentDidMount = () => {
    setInterval(()=> {
      cryptoApi.getCoins()
      .then(res => this.setState({arrayResult:res}))
  }, 120000);

    
  }
  
  //res => this.setState({arrayResult:res})

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  

  render() {
    const data = {
      columns: [

        ['data1', 3000, 200, 10, 4000, 150, 20]
      ]
    };

    /*this.state.arrayResults.map((cash)=>{
      columns.push(cash.price_usd)
    })*/

    console.log(this.state.arrayResult[0])
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