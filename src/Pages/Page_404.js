import React, { Component } from 'react';
import '../App.css';
import {Link} from "react-router-dom";

function Page_404() {
    return (
        <div class="container text-center">
            <div class="logo-404">
                <Link to="/Home"><img src="images/home/logo.png" alt="" /></Link>
            </div>
            <div class="content-404">
                <img src="images/404/404.png" class="img-responsive" alt="" />
                <h1><b>OPPS!</b> We Couldn’t Find this Page</h1>
                <p>Uh... So it looks like you brock something. The page you are looking for has up and Vanished.</p>
                <h2><Link to="/Home">Bring me back Home</Link></h2>
            </div>
        </div>
    );
}

export default Page_404;
