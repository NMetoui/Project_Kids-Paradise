import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="header-text">
                <h6 _msthash={822055} _msttexthash={614848}>
                  Bienvenue dans notre Plateforme ludo-éducative
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
                      Rejoignez-nous sur Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image">
                <img
                  src="assets/images/img_pres.jpg"
                  style={{ width: "140%" }}
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

export default Banner;
