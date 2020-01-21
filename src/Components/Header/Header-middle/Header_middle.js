import React from 'react';
import Logo from '../Header-middle/Logo';
import Currency from '../Header-middle/Currency';
import Shop_menu from '../Header-middle/Shop_menu';

function Header_middle() {
    return (
        <div className="header-middle">{/*header-middle*/}
            <div className="container">
                <div className="row">
                    <div className="col-md-4 clearfix">
                        <Logo />
                        <Currency />
                    </div>
                    <Shop_menu />
                </div>
            </div>
        </div>
    );
}

export default Header_middle;