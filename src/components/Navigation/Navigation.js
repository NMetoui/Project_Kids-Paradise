import React, { useState } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../Redux/authSlice";

const Navigation = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  console.log(show);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <Link to="/" className="logo">
                  <img
                    src="http://www.kparadise.com/wp-content/uploads/2016/10/logo.png"
                    alt="Kids paradise"
                  />
                </Link>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section active">
                    <Link to="/"> Accueil</Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link to="/Apropos">A propos</Link>
                  </li>

                  <li className="scroll-to-section">
                    <Link to="/Alire">A lire</Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link to="/Avoir">A voir</Link>
                  </li>

                  <li className="scroll-to-section">
                    <Link to="/Contact">Contactez nous</Link>
                  </li>
                  {!isAuthenticated ? (
                    <button
                      className="scroll-to-section"
                      onClick={() => {
                        setShow(true);
                        loginHandler();
                      }}
                    >
                      Login
                    </button>
                  ) : (
                    <button
                      className="scroll-to-section"
                      onClick={() => {
                        setShow(false);
                        logoutHandler();
                      }}
                    >
                      Logout
                    </button>
                  )}
                </ul>
                {/**
 
                {/* ***** Menu End ***** */}
              </nav>
              <Offcanvas show={show} onHide={() => setShow(false)}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Admin</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav
                    bg="light"
                    variant="light"
                    className="justify-content-end flex-grow-1 pe-3 flex-sm-column"
                  >
                    <Nav.Link onClick={() => navigate("/AdminLivre")}>
                      Livre
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/AdminVideo")}
                      href="#action2"
                    >
                      vidéo
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
