import React from 'react';
import Header_top from '../Header/Header-top/Header_top';
import Header_middle from '../Header/Header-middle/Header_middle';
import Header_bottom from '../Header/Header-bottom/Header_bottom';

function Footer() {
    return (
        <header id="header">{/*header*/}
            <Header_top />
            <Header_middle />
            <Header_bottom />
        </header>
    );
}

export default Footer;