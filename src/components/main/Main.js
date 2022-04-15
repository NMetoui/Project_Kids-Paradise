import React from "react";
import "./main.css";
import main_img from "../../images/img_pres.jpg";

const Main = () => {
  return (
    <div>
      <section className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="header-text">
                <h6 _msthash={822055} _msttexthash={614848}>
                  Bienvenue à notre bibliothéque
                </h6>
                <h2 _msthash={821769} _msttexthash={1841918}>
                  Meilleur endroit pour apprendre{" "}
                </h2>
                <div className="main-button-gradient">
                  <div className="scroll-to-section">
                    <a
                      href="#contact-section"
                      _msthash={1371305}
                      _msttexthash={624065}
                    >
                      Rejoignez-nous maintenant!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image">
                <img
                  src={main_img}
                  style={{ width: "500px", height: "400px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
