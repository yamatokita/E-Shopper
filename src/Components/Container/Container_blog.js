import React from 'react';
import Category_products from './Home/Category_products';
import Brands_products from './Home/Brands_products';
import Price_range from './Home/Price_range';
import Shipping from './Home/Shipping';
import Blog_post_area from './Blog/Blog_post_area';

function Container_blog() {
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
                    <Blog_post_area />
                </div>
            </div>
        </section>
    );
}

export default Container_blog;