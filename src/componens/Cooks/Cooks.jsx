import { useState } from "react";
import Cook from "../Cook/Cook";
import CurrentCooks from "../CurrentCooks/CurrentCooks";

const Cooks = ({ clock }) => {
  const [current, setCurrent] = useState([]);
  const [time, setTime] = useState(0);
  const handleCurrentCooks = (props) => {
    // console.log(props.recipe_id);
    const newCurrent = [...current, props];
    setCurrent(newCurrent);
  };

  function displayMessage() {
    setTimeout(() => {
      console.log("Message after 5 seconds!");
      setTime(1);
    }, 1000);
  }

  displayMessage();

  //   console.log(current);

  return (
    <div>
      <h2>Hello: {time}</h2>
      <h1 className="text-2xl font-semibold text-black text-center mb-6">
        Want to cook: {clock.length}
      </h1>

      <div className="grid justify-items-end mb-4">
        <div
          className="max-w-xs bg-yellow-500 text-sm text-white rounded-xl shadow-lg"
          role="alert"
        >
          <div className="flex p-4">
            Already item added.
            <div className="ms-auto">
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-5 rounded-lg text-white hover:text-white opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="overflow-x-auto my-10">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>

          {clock.map((time, index) => (
            <Cook
              key={index}
              clock={time}
              handleCurrentCooks={handleCurrentCooks}
            ></Cook>
          ))}
        </table>
      </div>

      <CurrentCooks current={current}></CurrentCooks>
    </div>
  );
};

export default Cooks;
