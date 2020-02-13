import React from 'react';
import Advertisement from './Shop/Advertisement';
import Category_products from './Home/Category_products';
import Brands_products from './Home/Brands_products';
import Price_range from './Home/Price_range';
import Shipping from './Home/Shipping';
import Features_items from './Shop/Features_items';

function Container_shop() {
    return (
        <div>
            <Advertisement />

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="left-sidebar">
                                <h2>Category</h2>
                                <Category_products />
                                <Brands_products />
                                <Price_range />
                                <Shipping />
                            </div>
                        </div>
                        <Features_items />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Container_shop;