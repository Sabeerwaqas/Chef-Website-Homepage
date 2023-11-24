import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="container">
      <div className="row">
        <div className="col row-child child-1">
          <h1 className="main-heading">
            Book <span className="special-color"> Private Chef </span> <br />{" "}
            for your <br /> Dinner <span className="special-color">Party</span>
          </h1>
          <small className="small-color">
            We’re providing the best Chef booking platform. <br /> Choose a menu
            and book your Chef instantly
          </small>
          <div className="data">
            <div className="data-child-1">
              <div>
                <i className="header-cursor bi bi-cursor"></i>
                <small className="region">Select Region</small>
                <i class="bi bi-chevron-down"></i>
              </div>
              <div>
                <small className="shamal">
                Al Shamal
                </small>
              </div>
            </div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
        <div className="col row-child child-2">2 of 2</div>
      </div>
    </header>
  );
};

export default Header;
