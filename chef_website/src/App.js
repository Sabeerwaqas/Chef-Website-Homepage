import React from "react";
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Customer from "./customerReviews/Customer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <Customer/>
      <Footer/>
    </>
  );
};

export default App;
