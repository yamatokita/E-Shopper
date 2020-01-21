import React from 'react';
import Footer_top from '../Footer/Footer-top/Footer_top';
import Footer_widget from '../Footer/Footer-widget/Footer_widget';
import Footer_bottom from '../Footer/Footer-bottom/Footer_bottom';

function Footer() {
    return (
        <footer id="footer">{/*Footer*/}
            <Footer_top />
            <Footer_widget />
            <Footer_bottom />
        </footer>
    );
}

export default Footer;