import React , { Component } from 'react';
import '../App.css';
import Header from '../Components/Header/Header';
import Container_product_details from '../Components/Container/Container_product_details';
import Footer from '../Components/Footer/Footer';


function Product_details() {
  return (
      <div>
        <Header />
        <Container_product_details />
        <Footer />
      </div>


  );
}

export default Product_details;
