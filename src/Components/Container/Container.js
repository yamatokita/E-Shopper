import React from 'react';
import Category_products from '../Container/Category_products';
import Brands_products from '../Container/Brands_products';
import Price_range from '../Container/Price_range';
import Shipping from '../Container/Shipping';
import Features_items from '../Container/Features_items';
import Category_tab from '../Container/Category_tab';
import Recommended_items from '../Container/Recommended_items';

function Container() {
    return (
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
                    <div className="col-sm-9 padding-right">
                        <Features_items />
                        <Category_tab />
                        <Recommended_items />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Container;