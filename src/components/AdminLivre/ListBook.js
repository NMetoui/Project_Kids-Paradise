import React, { useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { deleteLivre } from "../../Redux/livreSlice";
import { editbookActions } from "../../Redux/editbookSlice";

const ListBook = () => {
  const dispatch = useDispatch();
  const livres = useSelector((state) => state.livres);
  const navigate = useNavigate();
  const handleDeleteClick = (id) => {
    dispatch(deleteLivre(id));
  };

  const loginHandler = () => {
    dispatch(editbookActions.login());
  };

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead className="table-dark">
          <tr>
            <th>image</th>
            <th>Titre</th>
            <th>Catégorie</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {livres.map((livre) => (
            <tr>
              <td>
                <img
                  src={livre.image}
                  style={{ width: "50px", heigth: "50px" }}
                />
              </td>
              <td>{livre.title}</td>
              <td>{livre.category}</td>
              <td>
                <button
                  type="button"
                  style={{ marginRight: "20px", width: "90px" }}
                  onClick={() => {
                    navigate(`/AdminLivre/${livre.id}`);
                    loginHandler();
                  }}
                >
                  <i class="bi bi-pencil"></i> Modifier
                </button>

                <button
                  style={{ marginLeft: "20px", width: "90px" }}
                  type="button"
                  onClick={() => handleDeleteClick({ id: livre.id })}
                >
                  <i class="bi bi-trash"></i> Supprimer
                </button>
              </td>
            </tr>
          ))}{" "}
        </tbody>
      </Table>
    </div>
  );
};

export default ListBook;
