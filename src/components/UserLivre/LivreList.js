import React from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";

import "./livre.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TagButton from "./TagButton";
import LivreCard from "./LivreCard";

const LivreList = () => {
  const [category, setCategory] = useState("all");
  const [filtredLivres, setFiltredLivres] = useState([]);
  const livres = useSelector((state) => state.livres);

  {
    useEffect(() => {
      category === "all"
        ? setFiltredLivres(livres)
        : setFiltredLivres(
            livres.filter((livre) => livre.category == category)
          );
    }, [category]);
  }
  return (
    <div>
      <Container>
        <div>
          <TagButton
            name="all"
            tagActive={category === "all" ? true : false}
            setCategory={setCategory}
          />
          <TagButton
            name="Evenement"
            tagActive={category === "Evenement" ? true : false}
            setCategory={setCategory}
          />
          <TagButton
            name="Histoire"
            tagActive={category === "Histoire" ? true : false}
            setCategory={setCategory}
          />
          <TagButton
            name="Pour le soir"
            tagActive={category === "Pour le soir" ? true : false}
            setCategory={setCategory}
          />
        </div>{" "}
      </Container>
      <div className="listes">
        {filtredLivres.map((livre) => (
          <LivreCard livre={livre} />
        ))}
      </div>
    </div>
  );
};

export default LivreList;
