import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Livre = () => {
  const livres = useSelector((state) => state.livres);
  const params = useParams();
  console.log(params);
  let myId = params.id;
  let myLivre = livres.find((livre) => livre.id == myId);

  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col
              style={{
                textAlign: "left",
                color: "black",
                marginBottom: "20px",
                marginTop: "50px",
              }}
            >
              <h1>{myLivre.title}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={myLivre.image} style={{ width: "300px" }}></img>
            </Col>
            <Col
            /*style={{
                backgroundImage: `url(${Background})`,
                opacity: "0.5",
                height: "100vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}*/
            >
              <h4
                style={{
                  textAlign: "justify",
                  padding: "50px",
                  color: "black",
                }}
              >
                {myLivre.description}
              </h4>
              <a className="product-price-btn" href={myLivre.pdf}>
                <Button type="button">Lire</Button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Livre;
