import React, { useState } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addVideo } from "../../Redux/videoSlice";

const AddVideo = () => {
  const [valuetit, setValuetit] = useState("");

  const [valueimg, setValueimg] = useState("");
  const [valuesou, setValuesou] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addVideo({
        id: Math.random(),
        title: valuetit,

        image: valueimg,
        source: valuesou,
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>URL image video</Form.Label>
            <Form.Control
              type="text"
              onChange={(event) => setValueimg(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>URL source video</Form.Label>
            <Form.Control
              type="text"
              onChange={(event) => setValuesou(event.target.value)}
            />
          </Form.Group>

          <button type="submit">Ajouter Video</button>
        </Form>
      </Container>
    </div>
  );
};

export default AddVideo;
