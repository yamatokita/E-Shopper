import React from 'react';

function Review_payment() {
    return (
        <div className="table-responsive cart_info">
            <table className="table table-condensed">
                <thead>
                    <tr className="cart_menu">
                        <td className="image">Item</td>
                        <td className="description" />
                        <td className="price">Price</td>
                        <td className="quantity">Quantity</td>
                        <td className="total">Total</td>
                        <td />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="cart_product">
                            <a href><img src="images/cart/one.png" alt="" /></a>
                        </td>
                        <td className="cart_description">
                            <h4><a href>Colorblock Scuba</a></h4>
                            <p>Web ID: 1089772</p>
                        </td>
                        <td className="cart_price">
                            <p>$59</p>
                        </td>
                        <td className="cart_quantity">
                            <div className="cart_quantity_button">
                                <a className="cart_quantity_up" href> + </a>
                                <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                                <a className="cart_quantity_down" href> - </a>
                            </div>
                        </td>
                        <td className="cart_total">
                            <p className="cart_total_price">$59</p>
                        </td>
                        <td className="cart_delete">
                            <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                        </td>
                    </tr>
                    <tr>
                        <td className="cart_product">
                            <a href><img src="images/cart/two.png" alt="" /></a>
                        </td>
                        <td className="cart_description">
                            <h4><a href>Colorblock Scuba</a></h4>
                            <p>Web ID: 1089772</p>
                        </td>
                        <td className="cart_price">
                            <p>$59</p>
                        </td>
                        <td className="cart_quantity">
                            <div className="cart_quantity_button">
                                <a className="cart_quantity_up" href> + </a>
                                <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                                <a className="cart_quantity_down" href> - </a>
                            </div>
                        </td>
                        <td className="cart_total">
                            <p className="cart_total_price">$59</p>
                        </td>
                        <td className="cart_delete">
                            <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                        </td>
                    </tr>
                    <tr>
                        <td className="cart_product">
                            <a href><img src="images/cart/three.png" alt="" /></a>
                        </td>
                        <td className="cart_description">
                            <h4><a href>Colorblock Scuba</a></h4>
                            <p>Web ID: 1089772</p>
                        </td>
                        <td className="cart_price">
                            <p>$59</p>
                        </td>
                        <td className="cart_quantity">
                            <div className="cart_quantity_button">
                                <a className="cart_quantity_up" href> + </a>
                                <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                                <a className="cart_quantity_down" href> - </a>
                            </div>
                        </td>
                        <td className="cart_total">
                            <p className="cart_total_price">$59</p>
                        </td>
                        <td className="cart_delete">
                            <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>&nbsp;</td>
                        <td colSpan={2}>
                            <table className="table table-condensed total-result">
                                <tbody><tr>
                                    <td>Cart Sub Total</td>
                                    <td>$59</td>
                                </tr>
                                    <tr>
                                        <td>Exo Tax</td>
                                        <td>$2</td>
                                    </tr>
                                    <tr className="shipping-cost">
                                        <td>Shipping Cost</td>
                                        <td>Free</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td><span>$61</span></td>
                                    </tr>
                                </tbody></table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Review_payment;