import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Service.css";
const Service = () => {
  const navigate = useNavigate();
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h4>
                Nos <em>Services</em>
              </h4>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="ser">
              <div className="grid">
                <div className="cardcontainer">
                  <img
                    src="https://www.fantasiaextraescolares.com/wp-content/uploads/2019/05/Fondocampa.png"
                    width={300}
                    height={150}
                    alt="placeholder"
                  />
                  <h1>Contes A lire</h1>
                  <p></p>
                  <div className="bottomline">
                    <div className="cardbutton">
                      <Link to="/Alire"> Voir plus</Link>
                    </div>
                  </div>
                </div>
                <div className="cardcontainer">
                  <img
                    src="https://static.lexpress.fr/medias_11721/w_640,h_358,c_fill,g_center/v1515578772/un-enfant-teste-une-application-d-apprentissage-de-la-lecture-grapho-learn-a-marseille-le-8-janvier-2018_6001512.jpg"
                    width={300}
                    height={150}
                    alt="placeholder"
                  />
                  <h1>Fondamentaux à voir</h1>
                  <p></p>
                  <div className="bottomline">
                    <div className="cardbutton">
                      <Link to="/Avoir"> Voir plus</Link>
                    </div>
                  </div>
                </div>
                <div className="cardcontainer">
                  <img
                    src="https://www.autismeinfoservice.fr/sites/default/files/2019-03/enfant_autiste_0.jpg"
                    width={300}
                    height={150}
                    alt="placeholder"
                  />
                  <h1>Tutos</h1>

                  <div className="bottomline">
                    <div>
                      <a
                        onClick={() => navigate("/")}
                        href="#"
                        className="cardbutton"
                      >
                        Voir plus
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
