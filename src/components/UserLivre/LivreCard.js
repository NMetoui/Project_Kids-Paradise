import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./livre.css";

const LivreCard = ({ livre }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="box">
        <div className="left">
          <img
            src={livre.image}
            alt="News image"
            style={{
              background: 'url("{livre.image}") center center no-repeat',
            }}
          />
        </div>
        <div className="right">
          <h5>{livre.title}</h5>
          <button onClick={() => navigate(`/Alire/${livre.id}`)}>
            Voir plus
          </button>
        </div>
      </div>

      {/* <div className="card">
        <div className="card__top">
          <img
            src={livre.image}
            alt="News image"
            style={{
              background: 'url("{livre.image}") center center no-repeat',
            }}
          />
        </div>
        <div className="card__bottom">
          <h3>{livre.title}</h3>
          <h2>{livre.description.substring(0, 20) + "..."}</h2>
          <Button onClick={() => navigate(`/LivreList/${livre.id}`)}>
            Voir plus
          </Button>
        </div>
          </div>*/}
    </div>
  );
};

export default LivreCard;
