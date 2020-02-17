import React , { Component } from 'react';
import '../App.css';
import Header from '../Components/Header/Header';
import Container_blog_single from '../Components/Container/Container_blog_single';
import Footer from '../Components/Footer/Footer';


function Blog_single() {
  return (
      <div>
        <Header />
        <Container_blog_single />
        <Footer />
      </div>


  );
}

export default Blog_single;
