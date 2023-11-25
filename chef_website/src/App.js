import React from "react";
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Customer from "./customerReviews/Customer";
import Categories from "./categories/Categories";

const App = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <Categories/>
      <Customer/>
      <Footer/>
    </>
  );
};

export default App;
