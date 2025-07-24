import React from "react";
import RecipeCard from "../components/RecipeCard";
import recipes from "../data/recipes";

const Home = () => (
  <div style={{ padding: "20px" }}>
    <h1>All Recipes</h1>
    <div style={{ display: "flex",     justifyContent: "center", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  </div>
);

export default Home;
