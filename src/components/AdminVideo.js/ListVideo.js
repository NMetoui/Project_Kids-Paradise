import React, { useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { deleteVideo } from "../../Redux/videoSlice";

const ListVideo = ({ key }) => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos);
  const navigate = useNavigate();
  const handleDeleteClick = (id) => {
    dispatch(deleteVideo(id));
  };
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead className="table-dark">
          <tr>
            <th>image</th>
            <th>Titre</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video) => (
            <tr>
              <td>
                <img
                  src={video.image}
                  style={{ width: "100px", heigth: "100px" }}
                />
              </td>
              <td>{video.title}</td>

              <td>
                <button
                  type="button"
                  style={{ marginRight: "20px", width: "90px" }}
                  onClick={() => navigate(`/AdminVideo/${video.id}`)}
                >
                  <i class="bi bi-pencil"></i> Modifier
                </button>

                <button
                  style={{ marginLeft: "20px", width: "90px" }}
                  type="button"
                  onClick={() => handleDeleteClick({ id: video.id })}
                >
                  <i class="bi bi-trash"></i> Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListVideo;
