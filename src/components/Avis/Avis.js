import React from "react";
import "./Avis.css";
const Avis = () => {
  return (
    <div>
      <section className="services" id="services">
        <div className="container">
          <div className="row">
            <div className="section-heading">
              <h4>
                Vos <em>Avis</em>
              </h4>
            </div>
            <section className="testimonial">
              <div className="small-container align-self-center">
                <div className="row">
                  <div className="col-3">
                    <i className="fa fa-quote-left" />
                    <p>
                      Tout est au top! Merci pour votre service impeccable ainsi
                      que pour vos plats délicieux, frais et très belle
                      présentation. Je vous donne 5/5. Propreté et hygiène
                      parfaite. Je vous souhaite longue vie pour votre projet et
                      je reviendrai volontiers et très bientôt inchallah.
                    </p>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </div>
                    <img src="images/user1.png" alt="" />
                    <h3>Nesrine Guizani</h3>
                  </div>
                  <div className="col-3">
                    <i className="fa fa-quote-left" />
                    <p>
                      I'll give you 5 out of 5 because you really deserve it
                      ,everything there is excellent the welcoming staff the
                      highly delightful food the decoration every single thing
                      is amazing .I tried this place twice and I'll be back soon
                      inshalah
                    </p>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </div>
                    <img src="images/user2.png" alt="" />
                    <h3>Dur Amorri Dilline</h3>
                  </div>
                  <div className="col-3">
                    <i className="fa fa-quote-left" />
                    <p>
                      L'endroit est impeccable, c'est propre, c'est chic, c'est
                      convivial et chaleureux. Le personnel est très accueillant
                      et aux petits soins. La bouffe est succulente, exquise,
                      originale mais très appétissante. Bravo, bonne
                      continuation et nchallah beaucoup de succès.
                    </p>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </div>
                    <img src="images/user3.png" alt="" />
                    <h3>Ines Ben Hamouda</h3>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Avis;
