import React from "react";
import "./categories.css";
import exploreFoods from "../ChefPrivIImages/exploreFoods.png";
import masterChefs from "../ChefPrivIImages/masterChefs.png";
import desserts from "../ChefPrivIImages/desserts.png";
import events from "../ChefPrivIImages/events.png";
import birthday from "../ChefPrivIImages/birthday.png";

const Categories = () => {
  return (
    <>
      <section className="container-fluid food-items">
        <div className="container food-items-images">
          <h2>
            - Browse by <span className="browse-categories">Categories</span>
          </h2>
        </div>
        <div className="container">
          <div>
            {/* Explore foods image */}
            <img className="explore-foods" src={exploreFoods} />
            {/* Master chefs image  */}
            <img className="master-chefs" src={masterChefs} />
            {/* Desserts image */}
            <img className="desserts" src={desserts} />
            {/* Events image */}
            <img className="events" src={events} />
            {/* Birthdays image */}
            <img className="events birthday" src={birthday} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
