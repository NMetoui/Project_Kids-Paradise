import React from "react";

const Propos = () => {
  return (
    <div>
      <section className="get-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img
                  src="assets/images/pro_img.png"
                  alt=""
                  style={{ width: "120%" }}
                />
              </div>
            </div>

            <div className="col-lg-6 align-left-center">
              <div className="section-heading">
                <h4 style={{ marginLeft: "48px" }}>
                  A propos <em _istranslated={1}> de nous</em>
                </h4>
                <p style={{ textAlign: "justify", marginLeft: "50px" }}>
                  Nous somme une plateforme d'apprentissage déstinée pour les
                  enfants de primaire. Nous offrons à vos petits un endroit où
                  ils sont capables d'accquérir des nouveaux connaissances
                  linguistiques et culturelles à partir de notre bibliothèque.
                  Des divers ateliers sont proposés pour vous aider à améliorer
                  les habitudes de votre enfants telque bricolage, construction,
                  coliorage, jeux de raisonnement,etc.. Ainsi pour vous les
                  parents on vous offre des tutorials pour vous aider à mieux
                  comprendre vos enfants.
                </p>
                <div className="main-button-gradient">
                  <div
                    className="scroll-to-section"
                    style={{ marginLeft: "48px" }}
                  >
                    <a
                      href="#contact-section"
                      _msthash={1371305}
                      _msttexthash={624065}
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Propos;
