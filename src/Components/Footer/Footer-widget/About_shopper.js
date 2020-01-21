import React from 'react';

function About_shopper() {
    return (
        <div className="col-sm-3 col-sm-offset-1">
            <div className="single-widget">
                <h2>About Shopper</h2>
                <form action="#" className="searchform">
                    <input type="text" placeholder="Your email address" />
                    <button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right" /></button>
                    <p>Get the most recent updates from <br />our site and be updated your self...</p>
                </form>
            </div>
        </div>
    );
}

export default About_shopper;