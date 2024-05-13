import { MdAccessTime } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
const Recipe = ({ recipe, handleClock }) => {
  //   console.log(recipe.recipe);
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  //   console.log(recipe_image);
  return (
    <div className="border-2 border-gray-200 p-5 rounded-2xl space-y-5">
      <img
        src={recipe_image}
        alt=""
        className="w-100 lg:w-96 h-100 lg:96 rounded-2xl"
      />
      <h2 className="text-xl font-semibold text-black">{recipe_name}</h2>
      <p className="text-sm">{short_description}</p>
      <hr />
      <h2 className="text-lg font-medium">Ingredients: {ingredients.length}</h2>
      <ul className="space-y-4">
        {/* <li> {ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li> */}
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <hr />

      <div className="flex gap-10">
        <div className="flex items-center gap-4">
          <MdAccessTime />
          {preparing_time}
        </div>
        <div className="flex items-center gap-4">
          <IoTimerOutline />
          {calories}
        </div>
      </div>

      <button
        onClick={() => {
          handleClock(recipe);
        }}
        className="btn bg-green-400 hover:bg-green-500 border border-green-400 rounded-full text-black text-lg font-semibold "
      >
        Want to Cook
      </button>
    </div>
  );
};

export default Recipe;
