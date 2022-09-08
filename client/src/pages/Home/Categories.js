import React from "react";
import "./Categories.css";
import CategoryCard from "./CategoryCard";
import Image1 from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Image2 from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Image3 from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";

const Categories = () => {
  return (
    <div className="categories">
      <CategoryCard image={Image1} name={"Headphones"} />
      <CategoryCard image={Image2} name={"Speakers"} />
      <CategoryCard image={Image3} name={"Earphones"} />
    </div>
  );
};

export default Categories;
