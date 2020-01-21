import React from 'react';
import Company_info from '../Footer-top/Company_info';
import Video_gallery from '../Footer-top/Video_gallery';
import Address from '../Footer-top/Address';

function Footer_top() {
    return (
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <Company_info />
                    <Video_gallery />
                    <Address />
                </div>
            </div>
        </div>
    );
}

export default Footer_top;