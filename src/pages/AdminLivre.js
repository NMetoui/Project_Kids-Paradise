import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import AddBook from "../components/AdminLivre/AddBook";
import EditBook from "../components/AdminLivre/EditBook";
import ListBook from "../components/AdminLivre/ListBook";

const AdminLivre = () => {
  const iseditbook = useSelector((state) => state.editbook.iseditbook);
  console.log(iseditbook);
  return (
    <div>
      {/* ***** Header Area Start ***** */}

      {/* ***** Header Area End ***** */}

      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text">
                <h1>Gestion Livre</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="more-info">
        <div class="container">
          <Tabs
            defaultActiveKey="ListBook"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="ListBook" title="Liste Livre">
              <ListBook />
            </Tab>
            <Tab eventKey="AddBook" title="Ajout Livre">
              <AddBook />
            </Tab>

            {/* <Tab eventKey="EditBook" title="Editer Livre">
              {iseditbook ? <EditBook /> : <></>}
  </Tab>*/}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default AdminLivre;
