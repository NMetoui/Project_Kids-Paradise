import React from "react";
import "./Galerie.css";
const Galerie = () => {
  return (
    <div>
      <section className="services" id="services">
        <div className="container">
          <div className="row">
            <div className="section-heading">
              <h6>Our Services</h6>
              <h4>
                Provided <em>Services</em>
              </h4>
            </div>
            <section className="gal">
              <div className="box">
                <img
                  src="assets/images/g7.jpg"
                  style={{ width: "1000px", height: "800px" }}
                  alt=""
                />
              </div>
              <div className="box">
                <img
                  src="assets/images/g2.jpg"
                  style={{ width: "1000px", height: "800px" }}
                  alt=""
                />
              </div>
              <div className="box">
                <img
                  src="assets/images/g3.jpg"
                  style={{ width: "1000px", height: "800px" }}
                  alt=""
                />
              </div>
              <div className="box">
                <img
                  src="assets/images/g4.jpg"
                  style={{ width: "1000px", height: "800px" }}
                  alt=""
                />
              </div>
              <div className="box">
                <img
                  src="assets/images/g5.jpg"
                  style={{ width: "1000px", height: "800px" }}
                  alt=""
                />
              </div>
              <div className="box">
                <img
                  src="assets/images/g6.jpg"
                  style={{ width: "1000px", height: "800px" }}
                  alt=""
                />
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galerie;
