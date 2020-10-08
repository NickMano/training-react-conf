import React from "react";
import "../styles/components/Badge.scss";
import confLogo from "../images/badge-header.svg";

const Badge = () => (
  <div className="badge">
    <div className="badge__header">
      <img src={confLogo} alt="logo of component" />
    </div>
    <div className="badge__section-name">
      <img
        className="badge__avatar"
        src="https://en.gravatar.com/avatar?d=identicon"
        alt="Avatar"
      />
      <h1>
        Nicolas <br />
        Manograsso
      </h1>
    </div>
    <div className="badge__section-info">
      <h4>Engeneer Manager</h4>
      <p>@NicoMano </p>
    </div>
    <p>#PlatziConf</p>
  </div>
);

export default Badge;