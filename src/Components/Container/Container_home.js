import React from 'react';
import Category_products from '../Container/Home/Category_products';
import Brands_products from '../Container/Home/Brands_products';
import Price_range from '../Container/Home/Price_range';
import Shipping from '../Container/Home/Shipping';
import Features_items from '../Container/Home/Features_items';
import Category_tab from '../Container/Home/Category_tab';
import Recommended_items from '../Container/Home/Recommended_items';

function Container_home() {
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

export default Container_home;