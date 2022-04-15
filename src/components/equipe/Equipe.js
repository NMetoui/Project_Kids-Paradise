import React from "react";
import "./Equipe.css";
import eq1 from "./eq1.jpg";
import eq2 from "./eq2.jpg";
import eq3 from "./eq3.jpg";
import eq4 from "./eq4.jpg";

const Equipe = () => {
  return (
    <div>
      <section className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="header-text">
              <h6 _msthash={822055} _msttexthash={614848}>
                Voici l'équipe de Leurning Paradise :
              </h6>
              <h5 _msthash={821769} _msttexthash={1841918}>
                Meilleur endroit pour apprendre{" "}
                <em _istranslated={1}>4 Membre</em>
              </h5>
            </div>

            <div className="image_eq">
              <img src={eq1} alt="" />
              <img src={eq2} alt="" />
              <img src={eq3} alt="" />
              <img src={eq4} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipe;
