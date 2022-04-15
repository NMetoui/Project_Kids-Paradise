import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "./AddBook";
import EditBook from "./EditBook";
import ListBook from "./ListBook";
import NavBarBook from "./NavBarBook";

const RouterBook = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBarBook />

        <Routes>
          <Route path="/" element={<ListBook />} />
          <Route path="/AjoutLivre" element={<AddBook />} />
          <Route path="/ListBook/:id" element={<EditBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterBook;
