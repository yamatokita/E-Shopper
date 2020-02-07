import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Checkout from './Pages/Checkout';

import Page_404 from './Pages/Page_404';

function App() {
  return (
    <Router>
      <div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Checkout">
          <Checkout />
        </Route>
        <Route path="/404">
          <Page_404 />
        </Route>

      </Switch>

    </Router>
  );
}


export default App;
