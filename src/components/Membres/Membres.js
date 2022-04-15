import React from "react";

const Membres = () => {
  return (
    <div>
      <section className="our-team">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h6>Our Team</h6>
                <h4>
                  Our Team <em>Members</em>
                </h4>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <div className="naccs">
                <div className="tabs">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu">
                        <div className="active">
                          <img
                            src="assets/images/team-member-thumb-01.jpg"
                            alt=""
                          />
                          <h4>Ruby Foster</h4>
                          <span>CEO-FOUNDER</span>
                        </div>
                        <div>
                          <img
                            src="assets/images/team-member-thumb-03.jpg"
                            alt=""
                          />
                          <h4>Luis Oconnell</h4>
                          <span>CEO-FOUNDER</span>
                        </div>
                        <div>
                          <img
                            src="assets/images/team-member-thumb-02.jpg"
                            alt=""
                          />
                          <h4>Jackie Riggs</h4>
                          <span>CEO-FOUNDER</span>
                        </div>
                        <div>
                          <img
                            src="assets/images/team-member-thumb-04.jpg"
                            alt=""
                          />
                          <h4>Alfred Small</h4>
                          <span>CEO-FOUNDER</span>
                        </div>
                        <div>
                          <img
                            src="assets/images/team-member-thumb-05.jpg"
                            alt=""
                          />
                          <h4>Denis Mitchel</h4>
                          <span>CEO-FOUNDER</span>
                        </div>
                      </div>
                    </div>
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

export default Membres;
