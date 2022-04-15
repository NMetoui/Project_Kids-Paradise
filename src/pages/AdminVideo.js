import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import AddVideo from "../components/AdminVideo.js/AddVideo";
import EditVideo from "../components/AdminVideo.js/EditVideo";
import ListVideo from "../components/AdminVideo.js/ListVideo";

const AdminVideo = () => {
  return (
    <div>
      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text">
                <h1>Gestion Video</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="more-info">
        <div class="container">
          <Tabs
            defaultActiveKey="ListVideo"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="ListVideo" title="Liste video">
              <ListVideo />
            </Tab>
            <Tab eventKey="AddVideo" title="Ajout video">
              <AddVideo />
            </Tab>

            {/*<Tab eventKey="EditVideo" title="editer video">
              <EditVideo />
  </Tab>*/}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default AdminVideo;
