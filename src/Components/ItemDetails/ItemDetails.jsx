import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./index.scss";

export default function ItemDetails() {
  const { characters } = useSelector((state) => state.store);
  const { id } = useParams();
  const idx = +id;
  let findIndex;
  if (idx) {
    findIndex = characters.findIndex((character) => character.id === idx);
  }
  const character = characters[findIndex];
  
  return (
    <div className="details">
      <div className="wrapper">
        <div className="details__inner">
          <div className="details__img">
            <img src={character.image} alt={character.name} />
          </div>
          <h1 className="details__title">{character.name}</h1>
          <div className="details__information">
            <h3 className="details__label">informations</h3>
            <div className="details__item">
              <h3>Name</h3>
              <span>{character.name}</span>
            </div>
            <div className="details__item">
              <h3>Status</h3>
              <span>{character.status}</span>
            </div>
            <div className="details__item">
              <h3>Specie</h3>
              <span>{character.species}</span>
            </div>
            <div className="details__item">
              <h3>Origin</h3>
              <span>{character.origin}</span>
            </div>
            <div className="details__item">
              <h3>Type</h3>
              <span>{!character.type && "unknown"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
