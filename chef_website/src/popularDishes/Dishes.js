import React from "react";
import "./dishes.css";
import person from "../ChefPrivIImages/person.png";
import { dishData } from "./dishData";

const Dishes = () => {
  return (
    <>
      <section className="container popular-dishes-section">
        {/* Popular dishes heading */}
        <div>
          <h2>
            Our Most <br />{" "}
            <span className="popular-dishes">Popular Dishes</span> <br /> This
            Month
          </h2>
          <button className="see-all">See all</button>
        </div>

        <div className="cards-parent">
          {dishData.map((info, index) => (
            <div className="card-border" key={index}>
              <div>
                <img
                  className="dishes"
                  src={info.image}
                  alt={`Dish ${index + 1}`}
                />
              </div>
              <div className="dish-info">
                <p>{info.menuTitle}</p>
                <p className="pick-dish">
                  Pick <span className="deal-num">5</span> out of
                  <span className="deal-num">10</span> dishes
                </p>
                <h6 className="qar-200">{info.price}</h6>
                <div>
                  <img className="person" src={person} alt="Chef" />
                  <small className="marriot">{info.chef}</small>
                  <span className="rating">
                    <i className="bi bi-star-fill rating-star"></i>
                    <small className="rating-num">{info.rating}</small>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Dishes;
