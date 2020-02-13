import React from 'react';
import Details from '../Product_Details/Details';
import Company_profile from '../Product_Details/Company_profile';
import Tag from '../Product_Details/Tag';
import Reviews from '../Product_Details/Reviews';

function Category_tab() {
    return (
        <div className="category-tab shop-details-tab">
            <div className="col-sm-12">
                <ul className="nav nav-tabs">
                    <li><a href="#details" data-toggle="tab">Details</a></li>
                    <li><a href="#companyprofile" data-toggle="tab">Company Profile</a></li>
                    <li><a href="#tag" data-toggle="tab">Tag</a></li>
                    <li className="active"><a href="#reviews" data-toggle="tab">Reviews (5)</a></li>
                </ul>
            </div>
            <div className="tab-content">
                <Details />
                <Company_profile />
                <Tag />
                <Reviews />  
            </div>
        </div>
    );
}

export default Category_tab;