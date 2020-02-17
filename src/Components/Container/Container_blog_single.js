import React from 'react';
import Category_products from './Home/Category_products';
import Brands_products from './Home/Brands_products';
import Price_range from './Home/Price_range';
import Shipping from './Home/Shipping';
import Blog_post_area from './Blog_Single/Blog_post_area';
import Rating_area from './Blog_Single/Rating_area';
import Socials_share from './Blog_Single/Socials_share';
import Comments from './Blog_Single/Comments';
import Response_area from './Blog_Single/Response_area';
import Replay_box from './Blog_Single/Replay_box';

function Container_blog_single() {
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
                    <div className="col-sm-9">
                        <Blog_post_area />
                        <Rating_area />
                        <Socials_share />
                        <Comments />
                        <Response_area />
                        <Replay_box />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Container_blog_single;