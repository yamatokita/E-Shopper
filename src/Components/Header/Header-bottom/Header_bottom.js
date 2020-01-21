import React from 'react';
import Navbar_header from '../Header-bottom/Navbar_header';
import Main_menu from '../Header-bottom/Main_menu';
import Search_bar from '../Header-bottom/Search_bar';

function Header_bottom() {
    return (
        <div className="header-bottom">{/*header-bottom*/}
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <Navbar_header />
                        <Main_menu />
                    </div>
                    <Search_bar />
                </div>
            </div>
        </div>
    );
}

export default Header_bottom;