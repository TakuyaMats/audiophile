import React from "react";
import "./Categories.css";

const CategoryCard = ({ image, name }) => {
  return (
    <div className="category-card">
      <span className="card-background"></span>
      <div className="card-details">
        <img src={image}></img>
        <h3>{name}</h3>
        <a href="#">
          <p>Shop &#62; </p>
        </a>
      </div>
    </div>
  );
};

export default CategoryCard;
