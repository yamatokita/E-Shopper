import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Product_details from './Pages/Product_details';
import Blog from './Pages/Blog';
import Blog_single from './Pages/Blog_single';
import Cart from './Pages/Cart';
import Page_404 from './Pages/Page_404';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <Router>
      <div>
      </div>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/Home"><Home /></Route>
        <Route exact path="/Shop"><Shop /></Route>
        <Route exact path="/Product_details"><Product_details /></Route>
        <Route exact path="/Blog"><Blog /></Route>
        <Route exact path="/Blog_single"> <Blog_single /></Route>

        <Route path="/Cart"><Cart /></Route>
        <Route path="/404"><Page_404 /></Route>
        <Route path="/Contact"><Contact /> </Route>
        <Route path="/Login"><Login /></Route>
        <Route path="/Checkout"><Checkout /></Route>
      </Switch>

    </Router>
  );
}


export default App;
