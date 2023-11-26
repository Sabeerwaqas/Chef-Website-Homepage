import React from "react";
import "./happy.css";
import firstGirl from "../ChefPrivIImages/girlOne.png";
import secondGirl from "../ChefPrivIImages/girlTwo.png";
import thirdGirl from "../ChefPrivIImages/girlThree.png";
import fourthGirl from "../ChefPrivIImages/girlFour.png";
import visaCard from "../ChefPrivIImages/via.png";
import masterCard from "../ChefPrivIImages/masterCard.png";

const HappyCustomers = () => {
  return (
    <>
      <section>
        <div className="girlsPics">
          <span>
            <img className="girl-one girl" src={firstGirl} />
            <img className="girl-two girl" src={secondGirl} />
            <img className="girl-three girl" src={thirdGirl} />
            <img className="girl-four girl" src={fourthGirl} />
          </span>
          <span>
            <small className="happy-customers">Our happy customers</small>
          </span>
          <span className="girls-review-section">
            <i class="girls-star bi bi-star-fill"></i>
            <small className="four-point-seven">4.7</small>
            <small className="eight-point-two">(8.2K Rewiew)</small>
          </span>
          <span>
            <small className="we-accept">We accept</small>
            <span>
              <img src={visaCard} className="trans-card visa" />
              <img src={masterCard} className="trans-card master-card" />
            </span>
          </span>
        </div>
      </section>
    </>
  );
};

export default HappyCustomers;
