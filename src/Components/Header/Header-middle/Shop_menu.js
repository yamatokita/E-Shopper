import React from 'react';

function Shop_menu() {
  return (
    <div className="col-md-8 clearfix">
      <div className="shop-menu clearfix pull-right">
        <ul className="nav navbar-nav">
          <li><a href><i className="fa fa-user" /> Account</a></li>
          <li><a href><i className="fa fa-star" /> Wishlist</a></li>
          <li><a href="checkout.html"><i className="fa fa-crosshairs" /> Checkout</a></li>
          <li><a href="cart.html"><i className="fa fa-shopping-cart" /> Cart</a></li>
          <li><a href="login.html"><i className="fa fa-lock" /> Login</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Shop_menu;