import React from "react";
import "./Logo.css";
import { Link  } from "react-router-dom";

function Logo() {
  return (
    <div className="logo__mod">
      <Link className="logo__modicon"to="/">
 <img
      className="logo"
      src="https://2.bp.blogspot.com/-2NiXP8bzck0/XJa_MzG6vlI/AAAAAAAAJbk/2oRQhQ0959UpmSxJ6oX3RKRezVfDIbnAwCK4BGAYYCw/s1600/logo%2Bshazam%2Bicon.png"
      alt=""
      />
<h3>afari</h3>
      </Link>
    </div>
  );
}

export default Logo;
