import React from 'react';

function Product_information() {
    return (
        <div className="col-sm-7">
            <div className="product-information">{/*/product-information*/}
                <img src="images/product-details/new.jpg" className="newarrival" alt="" />
                <h2>Anne Klein Sleeveless Colorblock Scuba</h2>
                <p>Web ID: 1089772</p>
                <img src="images/product-details/rating.png" alt="" />
                <span>
                    <span>US $59</span>
                    <label>Quantity:</label>
                    <input type="text" defaultValue={3} />
                    <button type="button" className="btn btn-fefault cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                    </button>
                </span>
                <p><b>Availability:</b> In Stock</p>
                <p><b>Condition:</b> New</p>
                <p><b>Brand:</b> E-SHOPPER</p>
                <a href><img src="images/product-details/share.png" className="share img-responsive" alt="" /></a>
            </div>{/*/product-information*/}
        </div>
    );
}

export default Product_information;