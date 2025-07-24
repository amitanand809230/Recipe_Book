import React from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../data/recipes";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div style={{ padding: "20px",  display: "flex", flexDirection: "row", gap:"20px", height: "500px"}}>
      <Link style={{textDecoration: "none"}} to="/">← Back</Link>
      <div>
      <h2 style={{color: "#5f975d"}}>{recipe.name}</h2>
      <img  src={recipe.image} alt={recipe.name} style={{width: "300px", borderRadius: "10px", transition: "transform 0.3s ease, box-shadow 0.3s ease", boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
  }}
/>

      </div>
      <div>
      <h3 style={{color: "#5f975d"}}>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((item, i) => (
          <li style={{color: "#d6c722ff"}} key={i}>{item}</li>
        ))}
      </ul>
      <h3 style={{color: "#5f975d"}}>Instructions:</h3>
      <p style={{color: "#0c606aff"}}>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
