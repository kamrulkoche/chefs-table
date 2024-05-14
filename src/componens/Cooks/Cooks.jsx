import { useState } from "react";
import Cook from "../Cook/Cook";
import CurrentCooks from "../CurrentCooks/CurrentCooks";
import Toast from "../Feedback/Toast";

const Cooks = ({ clock, time }) => {
  // console.log(clock);
  const [current, setCurrent] = useState([]);
  // const [show, setShow] = useState();

  const handleCurrentCooks = (props) => {
    // console.log(props);
    const newCurrent = [...current, props];
    setCurrent(newCurrent);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-black text-center mb-6">
        Want to cook: {clock.length}
      </h1>

      <div>{time === true && <Toast />}</div>

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
