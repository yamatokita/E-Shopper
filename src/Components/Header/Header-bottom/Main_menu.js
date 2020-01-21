import React from 'react';

function Main_menu() {
  return (
    <div className="mainmenu pull-left">
      <ul className="nav navbar-nav collapse navbar-collapse">
        <li><a href="index.html" className="active">Home</a></li>
        <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down" /></a>
          <ul role="menu" className="sub-menu">
            <li><a href="shop.html">Products</a></li>
            <li><a href="product-details.html">Product Details</a></li>
            <li><a href="checkout.html">Checkout</a></li>
            <li><a href="cart.html">Cart</a></li>
            <li><a href="login.html">Login</a></li>
          </ul>
        </li>
        <li className="dropdown"><a href="#">Blog<i className="fa fa-angle-down" /></a>
          <ul role="menu" className="sub-menu">
            <li><a href="blog.html">Blog List</a></li>
            <li><a href="blog-single.html">Blog Single</a></li>
          </ul>
        </li>
        <li><a href="404.html">404</a></li>
        <li><a href="contact-us.html">Contact</a></li>
      </ul>
    </div>
  );
}

export default Main_menu;