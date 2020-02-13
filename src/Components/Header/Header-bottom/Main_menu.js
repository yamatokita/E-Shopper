import React from 'react';
import { Link } from "react-router-dom";

function Main_menu() {
  return (
    <div className="mainmenu pull-left">
      <ul className="nav navbar-nav collapse navbar-collapse">
        <li><Link to="/Home">Home</Link> </li>
        <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down" /></a>
          <ul role="menu" className="sub-menu">
            <li><Link to="/Shop">Products</Link> </li>
            <li><Link to="/Product_details">Product Details</Link> </li>
            <li><Link to="/Checkout">Checkout</Link> </li>
            <li><Link to="/Cart">Cart</Link> </li>
            <li><Link to="/Login">Login</Link> </li>
          </ul>
        </li>
        <li className="dropdown"><a href="#">Blog<i className="fa fa-angle-down" /></a>
          <ul role="menu" className="sub-menu">
            <li><a href="blog.html">Blog List</a></li>
            <li><a href="blog-single.html">Blog Single</a></li>
          </ul>
        </li>
        <li><Link to="/404">404</Link> </li>
        <li><Link to="/Contact">Contact</Link> </li>
      </ul>
    </div>
  );
}

export default Main_menu;