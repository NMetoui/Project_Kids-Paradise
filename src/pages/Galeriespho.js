import React from "react";

import Photos from "../components/Photos/Photos";

const Galeriespho = () => {
  return (
    <div>
      {/* ***** Header Area Start ***** */}

      {/* ***** Header Area End ***** */}
      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text">
                <h1>Galerie</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*start photos*/}

      <Photos />

      {/**end photos */}
      {/**start footer */}

      {/**end footer */}
      {/* Scripts */}
      {/* Bootstrap core JavaScript */}
    </div>
  );
};

export default Galeriespho;
