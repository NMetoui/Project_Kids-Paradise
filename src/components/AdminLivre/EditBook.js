import React, { useState } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editbookActions } from "../../Redux/editbookSlice";
import { updateLivre } from "../../Redux/livreSlice";

const EditBook = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(editbookActions.logout());
  };
  const livres = useSelector((state) => state.livres);

  const params = useParams();
  console.log(params);
  let myId = params.id;
  let myBook = livres.find((livre) => livre.id == myId);
  console.log(myBook);
  const [valueid, setValueid] = useState(myBook.id);
  const [valuetit, setValuetit] = useState(myBook.title);
  const [valuecat, setValuecat] = useState(myBook.category);
  const [valueimg, setValueimg] = useState(myBook.image);
  const [valuepdf, setValuepdf] = useState(myBook.pdf);
  const [valuedes, setValuedes] = useState(myBook.description);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateLivre({
        id: valueid,
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
      {" "}
      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text">
                <h1>Edit video</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**start getinfo */}
      <section className="get-info">
        <Container>
          <Form onSubmit={onSubmit} style={{ backgroundColor: "#dc8cdb" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                value={valuetit}
                onChange={(event) => setValuetit(event.target.value)}
              />
            </Form.Group>
            <Form.Select
              aria-label="Choisir la catégorie"
              value={valuecat}
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
                value={valueimg}
                onChange={(event) => setValueimg(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>PDF livre</Form.Label>
              <Form.Control
                type="text"
                value={valuepdf}
                onChange={(event) => setValuepdf(event.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={valuedes}
                onChange={(event) => setValuedes(event.target.value)}
              />
            </Form.Group>
            <button onClick={() => logoutHandler()} type="submit">
              Enregistrer
            </button>
          </Form>
        </Container>
      </section>
    </div>
  );
};

export default EditBook;
