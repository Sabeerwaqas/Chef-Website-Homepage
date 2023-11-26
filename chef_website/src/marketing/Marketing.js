import React from "react";
import "./marketing.css";
import background from "../ChefPrivIImages/Rectangle 4364.png";
import circleOne from "../ChefPrivIImages/first.png";
import circleTwo from "../ChefPrivIImages/second.png";
import circleThree from "../ChefPrivIImages/third.png";
import circleFour from "../ChefPrivIImages/fourth.png";
import circleFive from "../ChefPrivIImages/fifth.png";
import mobile from "../ChefPrivIImages/mobile.png";
import icecream from "../ChefPrivIImages/icecream.png";
import googlePlaystore from "../ChefPrivIImages/googleplay.png";
import iosApp from "../ChefPrivIImages/iphoneplaystore.png";
import pizza from "../ChefPrivIImages/pizza.png";

const Marketing = () => {
  return (
    <>
      <section>
        <div className="container images-container">
          <img className="orange-background" src={background} />
          <img className="circle-one" src={circleOne} />
          <img className="circle-two" src={circleTwo} />
          <img className="circle-three" src={circleThree} />
          <img className="circle-four" src={circleFour} />
          <img className="circle-five" src={circleFive} />
          <img className="icecream" src={icecream} />
          <img className="google-playstore" src={googlePlaystore} />
          <img className="pizza" src={pizza} />
          <img className="ios-playstore" src={iosApp} />
          <img className="mobile" src={mobile} />
          <h2 className="mobile-app">Download our Mobile App</h2>
        </div>
      </section>
    </>
  );
};

export default Marketing;
