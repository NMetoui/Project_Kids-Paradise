import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBarBook = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link onClick={() => navigate("/livre")}>Bibliothéque</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => navigate("livre/AjoutLivre")}>
            Ajout Livre
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBarBook;
