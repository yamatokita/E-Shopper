import React from 'react';
import Breadcrumbs from '../Container/Cart/Breadcrumbs';
import Cart_info from '../Container/Cart/Cart_info';
import Cart_action from '../Container/Cart/Cart_action';

function Container_cart() {
    return (
        <section id="cart_items">
            <div class="container">
                <Breadcrumbs />
                <Cart_info />
                <Cart_action />
            </div>
        </section>
    );
}

export default Container_cart;