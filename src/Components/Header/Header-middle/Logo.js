import React from 'react';
import {Link} from "react-router-dom";

function Logo() {
    return (
        
            <div className="logo pull-left">
                 {/* <a href="index.html"> <img src="images/home/logo.png" alt="" /> </a>  */}
                <Link to="/Home"><img src="images/home/logo.png" alt="" /></Link> 
                
            </div>
        
    );
}

export default Logo;