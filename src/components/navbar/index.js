import React from "react";
import "./styles.css";
import Drawer from "../drawer";

const NavInshort = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">
        <Drawer setCategory={setCategory} />
      </div>

      <img
        style={{ cursor: "pointer" }}
        src="https://cdn3.iconfinder.com/data/icons/ballicons-reloaded-free/512/icon-70-512.png"
        height="80%"
        alt="logo"
      />
    </div>
  );
};

export default NavInshort;
