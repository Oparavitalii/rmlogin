import React from "react";
import {FaSadTear} from "react-icons/fa";

import "./index.scss";
export default function EmtyResult() {
  return (
    <section className="empty">
      <div className="container">
        <div className="empty__inner">
          <FaSadTear className="empty__img"/>
          <p className="empty__text">Sorry. No matches found.</p>
        </div>
      </div>
    </section>
  );
}