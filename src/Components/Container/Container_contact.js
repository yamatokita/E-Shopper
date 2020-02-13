import React from 'react';
import Contact_map from '../Container/Contact/Contact_map';
import Contact_form from '../Container/Contact/Contact_form';
import Contact_info from '../Container/Contact/Contact_info';

function Container_contact() {
    return (
        <div id="contact-page" className="container">
            <div className="bg">
                <Contact_map />
                <div className="row">
                    <Contact_form />
                    <Contact_info />
                </div>
            </div>
        </div>
    );
}

export default Container_contact;