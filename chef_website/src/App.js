import React from "react";
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Customer from "./customerReviews/Customer";
import Categories from "./categories/Categories";
import Dishes from "./popularDishes/Dishes";
import Marketing from "./marketing/Marketing";
import HappyCustomers from "./happy customers/HappyCustomers";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HappyCustomers />
      <Marketing />
      <Dishes />
      <Categories />
      <Customer />
      <Footer />
    </>
  );
};

export default App;
