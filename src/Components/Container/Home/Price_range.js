import React from 'react';

function Price_range() {
    return (
        <div className="price-range">
            <h2>Price Range</h2>
            <div className="well">
            <input type="text" class="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" /><br />
                <b>$ 0</b> <b className="pull-right">$ 600</b>
            </div>
        </div>


    );
}

export default Price_range;