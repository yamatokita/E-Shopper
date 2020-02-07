import React , { Component } from 'react';
import '../App.css';
import Header from '../Components/Header/Header';
import Container_checkout from '../Components/Container/Container_checkout';
import Footer from '../Components/Footer/Footer';


function Cart() {
  return (
      <div>
        <Header />
        <Container_checkout />
        <Footer />
      </div>


  );
}

export default Cart;
