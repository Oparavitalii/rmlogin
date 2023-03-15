import React from "react";
import banner from "../../Assets/img/banner.jpg"

import "./index.scss";

export default function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__img">
          <img src={banner} alt="banner" />
        </div>
      </div>
    </section>
  );
}
