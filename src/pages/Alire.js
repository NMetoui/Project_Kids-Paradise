import React from "react";
import LivreList from "../components/UserLivre/LivreList";

const Alire = () => {
  return (
    <div>
      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text">
                <h1>Contes A lire</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="get-info">
        <div class="container">
          <LivreList />
        </div>
      </section>
    </div>
  );
};

export default Alire;
