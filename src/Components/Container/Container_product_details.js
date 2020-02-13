import React from 'react';

import Category_products from './Home/Category_products';
import Brands_products from './Home/Brands_products';
import Price_range from './Home/Price_range';
import Shipping from './Home/Shipping';
import View_product from './Product_Details/View_product';
import Product_information from './Product_Details/Product_information';
import Category_tab from './Product_Details/Category_tab';
import Recommended_items from './Product_Details/Recommended_items';

function Container_product_details() {
    return (
        <div>
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
                            <div className="product-details">
                                <View_product />
                                <Product_information />
                            </div>
                            <Category_tab />
                            <Recommended_items />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Container_product_details;