import React from "react";
import "./footer.css";
import logo from "../ChefPrivIImages/footerLogo.png";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start  text-muted">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img className="footer-logo" src={logo} />
              </div>

              <div className="col-md-2 col-lg-2  col-xl-2 mx-auto mb-4">
                <h6 className="footer-address footer-address-heading text-uppercase fw-bold mb-4">
                  Address
                </h6>
                <p>
                  <a href="#!" className="text-reset">
                    <span>
                      <i class="bi bi-geo-alt-fill"></i>
                    </span>
                    <span>
                      <small className="address">
                        Park Avenue South, New Yourk, 74812, United States
                      </small>
                    </span>
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    <span>
                      <i class="bi bi-envelope-fill"></i>
                    </span>
                    <smalll className="email">contact@chefprive.com</smalll>
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    <span>
                      <i class="bi bi-telephone-fill"></i>
                    </span>
                    <smalll className="phone">000-123-456</smalll>
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset faq">
                    FAQ's
                  </a>
                  <a href="#!" className="text-reset contact">
                    Contact Us
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase footer-links-heading fw-bold mb-4">
                  Links
                </h6>
                <p>
                  <a href="#!" className="text-reset links-child">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset links-child">
                    How it works
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset links-child">
                    Our Chefs
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset links-child">
                    Reviews
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset links-child">
                    What's new
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase footer-subscribe-heading fw-bold mb-4">
                  Subscribe to Newsletter
                </h6>
                <div>
                  <input
                    className="footer-email-input"
                    type=""
                    name=""
                    value=""
                    placeholder="Email Address"
                  />
                  <button className="footer-email-button">
                    <i class="bi bi-send-fill"></i>
                  </button>
                </div>
                <div className="social-media">
                  <small className="our-social">Our Social</small>
                  <a>
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a>
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a>
                    <i class="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center copyright p-4">
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            O 16 Labs
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
