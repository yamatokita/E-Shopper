import React from 'react';
import Breadcrumbs from '../Container/Checkout/Breadcrumbs';
import Checkout_options from '../Container/Checkout/Checkout_options';
import Register_req from '../Container/Checkout/Register_req';
import Review_payment from '../Container/Checkout/Review_payment';

function Container_checkout() {
    return (
        <section id="cart_items">
            <div className="container">
                <Breadcrumbs />
                <Checkout_options />
                <Register_req />
                <Review_payment />
                
            </div>
        </section>
    );
}

export default Container_checkout;