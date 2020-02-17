import React from 'react';
import Breadcrumbs from '../Container/Checkout/Breadcrumbs';
import StepOneHeader from '../Container/Checkout/StepOneHeader';
import Checkout_options from '../Container/Checkout/Checkout_options';
import Register_req from '../Container/Checkout/Register_req';
import Register_reqHeader from '../Container/Checkout/Register_reqHeader';
import Review_payment from '../Container/Checkout/Review_payment';
import Review_paymentHeader from '../Container/Checkout/Review_paymentHeader';
import Payment_options from '../Container/Checkout/Payment_options'; 

function Container_checkout() {
    return (
        <section id="cart_items">
            <div className="container">
                <Breadcrumbs />

                <StepOneHeader />
                <Checkout_options />

                <Register_reqHeader />
                <Register_req />

                <Review_paymentHeader />
                <Review_payment />
                
                <Payment_options />
            </div>
        </section>
    );
}

export default Container_checkout;