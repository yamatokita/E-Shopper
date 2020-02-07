import React from 'react';

function Breadcrumbs() {
    return (
        <div className="breadcrumbs">
            <ol className="breadcrumb">
                <li><a href="#">Home</a></li>
                <li className="active">Check out</li>
            </ol>
        </div>
    );
}

export default Breadcrumbs;