import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ handleClock }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center xl:px-24">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe_id}
            recipe={recipe}
            handleClock={handleClock}
          ></Recipe>
        ))}
      </div>
    </>
  );
};

export default Recipes;
