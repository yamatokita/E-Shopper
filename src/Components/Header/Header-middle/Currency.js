import React from 'react';

function Currency() {
  return (
    <div className="btn-group pull-right clearfix">
      <div className="btn-group">
        <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
          USA
                        <span className="caret" />
        </button>
        <ul className="dropdown-menu">
          <li><a href>Canada</a></li>
          <li><a href>UK</a></li>
        </ul>
      </div>
      <div className="btn-group">
        <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
          DOLLAR
                        <span className="caret" />
        </button>
        <ul className="dropdown-menu">
          <li><a href>Canadian Dollar</a></li>
          <li><a href>Pound</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Currency;