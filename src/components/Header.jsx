import React from "react";
import {Link} from "react-router-dom"
import "./header.css"

const Header = () => {
  return (
    <header>
      <h2 className="mainTitle">Devmountain Eatery</h2>
      <nav>
        <Link to="">
          <button className="linkBtn">Home</button>
        </Link>
        <Link to="/newRecipe">
          <button className="linkBtn">Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
