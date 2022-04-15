import React from "react";
import Banner from "../components/Banner/Banner";
import Propos from "../components/Propos/Propos";

import Avis from "../components/Avis/Avis";
import Service from "../components/Service/Service";

const Accueil = () => {
  return (
    <div>
      <div>
        {/* ***** Header Area Start ***** */}

        {/* ***** Header Area End ***** */}

        {/* Carousel start 
        <section style={{ backgroundColor: "#dc8cdb" }}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="assets/images/c0.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="assets/images/c1.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/images/c2.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/images/c3.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <img
            src="./assets/images/2-2-min-1170x195.png"
            alt=""
            style={{
              top: "610px",
              left: "5px",
              position: "absolute",
            }}
          />
        </section>
        Carousel end */}
        {/* ***** Main Banner Area Start ***** */}
        <Banner />
        {/* ***** Main Banner Area End ***** */}
        {/* ***** Propos Start ***** */}
        <Propos />
        {/* ***** Propos End ***** */}
        {/* start Services */}
        <Service />
        {/*end Service */}

        {/**start avis */}
        <Avis />
        {/*end avis*/}
        {/**start footer */}

        {/**end Footer */}
        {/* Scripts */}
        {/* Bootstrap core JavaScript */}
      </div>
    </div>
  );
};

export default Accueil;
