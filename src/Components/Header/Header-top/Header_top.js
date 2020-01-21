import React from 'react';
import Contact_info from '../Header-top/Contact_info';
import Social_icons from '../Header-top/Social_icons';

function Footer_top() {
    return (
        <div className="header_top">{/*header_top*/}
          <div className="container">
            <div className="row">
              <Contact_info />
              <Social_icons />
            </div>
          </div>
        </div>
    );
}

export default Footer_top;