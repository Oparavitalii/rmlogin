import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { searchByName } from "../../Helpers/searchByName";
import EmtyResult from "../EmptyResult/EmptyResult";
import "./index.scss";



export default function ItemCharacter() {
  const {characters,query} = useSelector((state) => state.store);
  const navigate = useNavigate();
  
  const navigateToCharacter = (id) => {
    navigate(`/characters/${id}`);
  }

  const filteredCharacters = searchByName(characters,query);

  return (
    <div className="list__inner">
      {filteredCharacters.length ? filteredCharacters.map((character) => {
        return (
          <div onClick={() => navigateToCharacter(character.id)} className="list__item" key={character.id}>
            <div className="list__img">
              <img src={character.image} alt="alt" />
            </div>
            <div className="list__text">
              <h2 className="list__title">{character.name}</h2>
              <span className="list__species">{character.species}</span>
            </div>
          </div>
        );
      }) : <EmtyResult />}
    </div>
  );
}
