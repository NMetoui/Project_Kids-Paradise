import React from "react";
import Bibliotheque from "../components/Photos/Bibliotheque";

const Documents = () => {
  return (
    <div>
      {/* ***** Header Area Start ***** */}

      {/* ***** Header Area End ***** */}
      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text">
                <h1>Documents</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*start photos*/}

      <Bibliotheque />

      {/**end photos */}
      {/**start footer */}

      {/**end footer */}
      {/* Scripts */}
      {/* Bootstrap core JavaScript */}
    </div>
  );
};

export default Documents;
