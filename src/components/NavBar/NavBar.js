import React from "react";
import { useState } from "react";
import {
  Container,
  Navbar,
  Form,
  Button,
  Modal,
  Nav,
  Offcanvas,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../Redux/authSlice";

const NavBar = () => {
  const [show, setShow] = useState(false);

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
      <Navbar bg="dark" variant="dark" style={{ marginBottom: "4 rem" }}>
        {!isAuthenticated ? (
          <Button onClick={loginHandler}>Login</Button>
        ) : (
          <div>
            <Button
              onClick={() => {
                setShow(false);
                logoutHandler();
              }}
            >
              Logout
            </Button>
            <Button onClick={() => setShow(true)}>Menu</Button>
          </div>
        )}
      </Navbar>

      <Offcanvas show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavBar;
