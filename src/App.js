import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';
import Routes from './components/Routes';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    //getInitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    console.log('fish: ' + fish);
    //update the state
    const fishes = {...this.state.fishes};
    //add in our new fishes
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish
    //set state
    this.setState({fishes: fishes});
  }

  render() {
    return (
      // <Router>        
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
      //</Router>
    );
  }
}

export default App;
