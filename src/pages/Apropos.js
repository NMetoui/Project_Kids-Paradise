import React from "react";
import Avis from "../components/Avis/Avis";
import Lady from "../components/Lady/Lady";
import Membres from "../components/Membres/Membres";
const Apropos = () => {
  return (
    <div>
      {/* ***** Header Area Start ***** */}

      {/* ***** Header Area End ***** */}
      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text">
                <h1>A Propos</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**start getinfo */}
      <section className="get-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img
                  src="https://hlediamp0vxxm0o1q9dmq14j-wpengine.netdna-ssl.com/wp-content/uploads/2021/10/hwd-image-top-boy.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h4>
                  Nous <em>Sommes</em>
                </h4>
                <p style={{ textAlign: "justify" }}>
                  Kids Paradise, une nouvelle plateforme éducative en ligne pour
                  les enfants de 4 à 11 ans, une référence dans le milieu
                  éducatif. Elle vient tout juste d’être lancée, et elle est
                  gratuite. En plein troisième confinement et alors que l'école
                  se fait désormais à la maison, c’est un nouveau venu bienvenu
                  dans l’univers du jeu éducatif en ligne pour enfants. La
                  nouvelle plateforme pédagogique Kids Paradise, qui s’adresse
                  aux enfants de la maternelle jusqu’au primaire. Même si on
                  s’adresse aussi aux enseignants, Kids Paradise se positionne
                  pour les parents comme une plateforme de soutien scolaire .
                  Additions, soustractions, géométrie, grammaire, conjugaison,
                  orthographe, placement de la ponctuation, construction de
                  phrases… .La plateforme couvre tous les fondamentaux dans
                  l’apprentissage du Français et des Maths, aligné sur le
                  programme scolaire
                </p>
              </div>
              {/*<div className="row">
                <div className="col-lg-6">
                  <div className="info-item">
                    <div className="icon">
                      <img src="assets/images/service-icon-01.png" alt="" />
                    </div>
                    <h4>Best Strategy</h4>
                    <p>
                      Food &amp; truck tumeric taxidermy hoodie chiasore bitters
                      retroed gentrify street portland.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info-item">
                    <div className="icon">
                      <img src="assets/images/service-icon-02.png" alt="" />
                    </div>
                    <h4>Creative Ideas</h4>
                    <p>
                      Food &amp; truck tumeric taxidermy hoodie chiasore bitters
                      retroed gentrify street portland.
                    </p>
                  </div>
                </div>
  </div>*/}
            </div>
          </div>
        </div>
      </section>
      {/**end getinfo */}
      {/**start team */}
      {/*<Membres />*/}
      {/**end team */}

      {/**start avis */}
      <Avis />
      {/**end avis */}
      {/**start footer */}

      {/**end footer */}
      {/* Scripts */}
      {/* Bootstrap core JavaScript */}
    </div>
  );
};

export default Apropos;
