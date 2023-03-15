import React from "react";
import {FaSadTear} from "react-icons/fa";

import "./index.scss";
export default function Error() {
  return (
    <section className="error">
      <div className="container">
        <div className="error__inner">
          <FaSadTear className="error__img"/>
          <p className="error__text">Oops...Something went wrong</p>
        </div>
      </div>
    </section>
  );
}
