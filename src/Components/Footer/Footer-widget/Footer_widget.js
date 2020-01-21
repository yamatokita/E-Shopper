import React from 'react';
import Service from '../Footer-widget/Service';
import Quock_shop from '../Footer-widget/Quock_shop';
import About_shopper from '../Footer-widget/About_shopper';
import Policies from '../Footer-widget/Policies';

function Footer_widget() {
    return (
        <div className="footer-widget">
            <div className="container">
                <div className="row">
                    <Service />
                    <Quock_shop />
                    <Policies />
                    <About_shopper />
                </div>
            </div>
        </div>
    );
}

export default Footer_widget;