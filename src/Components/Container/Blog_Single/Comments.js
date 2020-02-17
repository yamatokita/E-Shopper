import React from 'react';

function Comments() {
    return (
        <div className="media commnets">
            <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-one.jpg" alt="" />
            </a>
            <div className="media-body">
                <h4 className="media-heading">Annie Davis</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="blog-socials">
                    <ul>
                        <li><a href><i className="fa fa-facebook" /></a></li>
                        <li><a href><i className="fa fa-twitter" /></a></li>
                        <li><a href><i className="fa fa-dribbble" /></a></li>
                        <li><a href><i className="fa fa-google-plus" /></a></li>
                    </ul>
                    <a className="btn btn-primary" href>Other Posts</a>
                </div>
            </div>
        </div>
    );
}

export default Comments;