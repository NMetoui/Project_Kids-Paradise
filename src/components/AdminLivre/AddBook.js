import React, { useState } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addLivre } from "../../Redux/livreSlice";

const AddBook = () => {
  const [valuetit, setValuetit] = useState("");
  const [valuecat, setValuecat] = useState("");
  const [valueimg, setValueimg] = useState("");
  const [valuepdf, setValuepdf] = useState("");
  const [valuedes, setValuedes] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addLivre({
        id: Math.random(),
        title: valuetit,
        category: valuecat,
        image: valueimg,
        pdf: valuepdf,
        description: valuedes,
      })
    );
  };

  return (
    <div>
      <Container>
        <Form onSubmit={onSubmit} style={{ backgroundColor: "#dc8cdb" }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Titre</Form.Label>
            <Form.Control
              type="text"
              onChange={(event) => setValuetit(event.target.value)}
            />
          </Form.Group>
          <Form.Select
            aria-label="Choisir la catégorie"
            onChange={(event) => setValuecat(event.target.value)}
          >
            <option>Choisir la catégorie</option>
            <option value="Evenement">Evenement</option>
            <option value="Histoire">Histoire</option>
            <option value="Pour le soir ">Pour le soir</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>URL image livre</Form.Label>
            <Form.Control
              type="text"
              onChange={(event) => setValueimg(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>PDF livre</Form.Label>
            <Form.Control
              type="text"
              onChange={(event) => setValuepdf(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(event) => setValuedes(event.target.value)}
            />
          </Form.Group>
          <button type="submit" className="btn btn-primary">
            Ajouter Livre
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default AddBook;
