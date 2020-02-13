import React from 'react';

function View_product() {
    return (
        <div className="col-sm-5">
            <div className="view-product">
                <img src="images/product-details/1.jpg" alt="" />
                <h3>ZOOM</h3>
            </div>
            <div id="similar-product" className="carousel slide" data-ride="carousel">
                {/* Wrapper for slides */}
                <div className="carousel-inner">
                    <div className="item active">
                        <a href><img src="images/product-details/similar1.jpg" alt="" /></a>
                        <a href><img src="images/product-details/similar2.jpg" alt="" /></a>
                        <a href><img src="images/product-details/similar3.jpg" alt="" /></a>
                    </div>
                    <div className="item">
                        <a href><img src="images/product-details/similar1.jpg" alt="" /></a>
                        <a href><img src="images/product-details/similar2.jpg" alt="" /></a>
                        <a href><img src="images/product-details/similar3.jpg" alt="" /></a>
                    </div>
                    <div className="item">
                        <a href><img src="images/product-details/similar1.jpg" alt="" /></a>
                        <a href><img src="images/product-details/similar2.jpg" alt="" /></a>
                        <a href><img src="images/product-details/similar3.jpg" alt="" /></a>
                    </div>
                </div>
                {/* Controls */}
                <a className="left item-control" href="#similar-product" data-slide="prev">
                    <i className="fa fa-angle-left" />
                </a>
                <a className="right item-control" href="#similar-product" data-slide="next">
                    <i className="fa fa-angle-right" />
                </a>
            </div>
        </div>
    );
}

export default View_product;