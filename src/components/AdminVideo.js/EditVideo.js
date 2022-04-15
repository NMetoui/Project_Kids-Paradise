import React, { useState } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateVideo } from "../../Redux/videoSlice";

const EditVideo = () => {
  const dispatch = useDispatch();

  const videos = useSelector((state) => state.videos);

  const params = useParams();
  console.log(params);
  let myId = params.id;
  let myVideo = videos.find((video) => video.id == myId);
  console.log(myVideo);
  const [valueid, setValueid] = useState(myVideo.id);
  const [valuetit, setValuetit] = useState(myVideo.title);
  const [valueimg, setValueimg] = useState(myVideo.image);
  const [valuesou, setValuesou] = useState(myVideo.source);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateVideo({
        id: valueid,
        title: valuetit,

        image: valueimg,
        source: valuesou,
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>URL image video</Form.Label>
              <Form.Control
                type="text"
                value={valueimg}
                onChange={(event) => setValueimg(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>URL source video</Form.Label>
              <Form.Control
                type="text"
                value={valuesou}
                onChange={(event) => setValuesou(event.target.value)}
              />
            </Form.Group>

            <button type="submit">Enregistrer</button>
          </Form>
        </Container>
      </section>
    </div>
  );
};

export default EditVideo;
