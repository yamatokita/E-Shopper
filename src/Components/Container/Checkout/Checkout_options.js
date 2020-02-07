import React from 'react';

function Checkout_options() {
    return (
        <div>
            <div className="step-one">
                <h2 className="heading">Step1</h2>
            </div>
            <div className="checkout-options">
                <h3>New User</h3>
                <p>Checkout options</p>
                <ul className="nav">
                    <li>
                        <label><input type="checkbox" /> Register Account</label>
                    </li>
                    <li>
                        <label><input type="checkbox" /> Guest Checkout</label>
                    </li>
                    <li>
                        <a href><i className="fa fa-times" />Cancel</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Checkout_options;