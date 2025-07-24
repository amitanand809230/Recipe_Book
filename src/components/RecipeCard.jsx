import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => (
  <div style={{ border: "2px solid #ccc", padding: "10px", width: "220px", }}>
    <Link to={`/recipe/${recipe.id}`}>
    <img src={recipe.image} alt={recipe.name} style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "10px", transition: "transform 0.3s ease, box-shadow 0.3s ease", boxShadow: "0 4px 6px rgba(0,0,0,0.1)"}} 
    onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
  }}/>
  </Link>
    <h3>{recipe.name}</h3>
    <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
  </div>
);

export default RecipeCard;
