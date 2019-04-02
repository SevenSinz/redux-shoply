import React, { Component } from 'react';
import { Switch, Redirect, Route } from "react-router-dom";

import ItemList from './ItemList';
import Cart from './Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact render={rtProps => <ItemList {...rtProps} {...this.props} />} />
          <Route path='/cart' exact render={rtProps => <Cart {...rtProps} {...this.props} />} />
          <Redirect to='/' />
        <ItemList />
        </Switch>
      </div>
    );
  }
}

export default App;
