import React , { Component } from 'react';
import '../App.css';
import Header from '../Components/Header/Header';
import Slider_main from '../Components/Slider/Slider_main';
import Container_home from '../Components/Container/Container_home';
import Footer from '../Components/Footer/Footer';


function Home() {
  return (
      <div>
        <Header />
        <Slider_main />
        <Container_home />
        <Footer />
      </div>


  );
}

export default Home;
