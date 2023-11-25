import React from "react";
import "./customer.css";
import { customerData } from "./customerData";

const Customer = () => {
  return (
    <section className="customer-reviews container-fluid">
      <div>
        <h2 className="customer-feedback">
          What our <br /> <span className="customer">Customers</span> say
        </h2>
      </div>
      <div className="cards-container">
        {customerData.map((data, index) => (
          <div className="customer-card" key={index}>
            <img className="william-image" src={data.image} alt={data.name} />
            <small className="customer-william">{data.name}</small>
            <small className="william">{data.title}</small>
            <p className="feedback">{data.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Customer;
