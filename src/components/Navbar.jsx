import React from 'react';
import Navlogo from "./assets/toggle.svg";

function Navbar() {
  return (
    <div className="navbar">
      <a href="">
        <img src={Navlogo}  width="18.6px" height="16px" alt="" />
      </a>
    </div>
  );
}

export default Navbar;