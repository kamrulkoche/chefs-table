import Cooks from "./componens/Cooks/Cooks";
import Header from "./componens/Header/Header";
import Recipes from "./componens/Recipes/Recipes";
import { useState } from "react";

function App() {
  const [clock, setClock] = useState([]);
  const [time, setTime] = useState(false);
  const handleClock = (recipe) => {
    // console.log("Hello", recipe.recipe_id);

    let isValid = false;
    clock.map((item) => {
      if (item.recipe_id == recipe.recipe_id) {
        // console.log("Error");
        isValid = true;
        setTime(true);
        setTimeout(() => {
          setTime(false);
        }, 1000);
      }
    });

    if (!isValid) {
      const newClock = [...clock, recipe];
      setClock(newClock);
    }
  };

  return (
    <>
      {/* <div>{time == true && <Toast />}</div> */}
      <div className="container mx-auto mt-8 ">
        <Header></Header>

        <div className="grid lg:flex">
          <div className="w-100 lg:w-3/5 mt-8">
            <Recipes handleClock={handleClock}></Recipes>
          </div>

          <div className="w-100 lg:w-2/5 mt-8">
            <Cooks clock={clock} time={time}></Cooks>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
