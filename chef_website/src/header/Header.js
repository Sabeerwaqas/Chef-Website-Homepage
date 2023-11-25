import React , {useState} from "react";
import "./header.css";

const Header = () => {

  // For persons count

  const [person, setPerson] = useState(0)

  return (
    <header className="container">
      <div className="row">
        <div className="col col-sm-12 col-md-12 col-lg-6 row-child child-1">
          <h1 className="main-heading">
            Book <span className="special-color"> Private Chef </span> <br />
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
                Al Shamal الشمال
                </small>
              </div>
            </div>
            <div className="child-2">
              <div>
              <i class="calender-icon bi bi-calendar3"></i>
              <small className="select-date">Select Date</small>
              <i class="date-arrow bi bi-chevron-down"></i>
              </div>
              <div>
                <input className="date" type="date"/>
              </div>
            </div>
            <div>
              <div>
              <i class="select-persons bi bi-person-add"></i>
              <small className="select-persons-text">Select persons</small>
              <small type="button" onClick={(e)=> setPerson(person - 1) }>
              <i  class="person-arrow-down bi bi-chevron-down"></i>
              </small>
              <input className="person-input" type="number" value={person}/>
              <small type="button" onClick={(e)=> setPerson(person + 1) }>
              <i class="person-arrow-up bi bi-chevron-up"></i>
              </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-6 row-child">2 of 2</div>
      </div>
    </header>
  );
};

export default Header;
