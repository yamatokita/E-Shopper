import React from 'react';

function Reviews() {
    return (
        <div className="tab-pane fade active in" id="reviews">
            <div className="col-sm-12">
                <ul>
                    <li><a href><i className="fa fa-user" />EUGEN</a></li>
                    <li><a href><i className="fa fa-clock-o" />12:41 PM</a></li>
                    <li><a href><i className="fa fa-calendar-o" />31 DEC 2014</a></li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p><b>Write Your Review</b></p>
                <form action="#">
                    <span>
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Email Address" />
                    </span>
                    <textarea name defaultValue={""} />
                    <b>Rating: </b> <img src="images/product-details/rating.png" alt="" />
                    <button type="button" className="btn btn-default pull-right">
                        Submit
            </button>
                </form>
            </div>
        </div>
    );
}

export default Reviews;