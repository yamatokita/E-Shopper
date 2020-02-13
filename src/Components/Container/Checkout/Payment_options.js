import React from 'react';

function Payment_options() {
    return (
        <div className="payment-options">
        <span>
          <label><input type="checkbox" /> Direct Bank Transfer</label>
        </span>
        <span>
          <label><input type="checkbox" /> Check Payment</label>
        </span>
        <span>
          <label><input type="checkbox" /> Paypal</label>
        </span>
      </div>
    );
}

export default Payment_options;