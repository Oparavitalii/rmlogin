import React from "react";
import { useSelector } from "react-redux";
import Error from "../Error/Error";
import ItemCharacter from "../ItemCharacter/ItemCharacter";
import Loader from "../Loader/Loader";
import "./index.scss";

export default function AllCharacters() {
  const { query, characters, loading, error } = useSelector(
    (state) => state.store
  );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <section className="list">
      <div className="container">
        <ItemCharacter />
      </div>
    </section>
  );
}
