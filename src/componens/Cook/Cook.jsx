const Cook = ({ clock, handleCurrentCooks }) => {
  //   console.log(time.clock.calories);
  const { recipe_id, recipe_name, preparing_time, calories } = clock;

  //   console.log(recipe_id);
  return (
    <>
      <tbody>
        <tr>
          <th>{recipe_id}</th>
          <td>{recipe_name}</td>
          <td>{preparing_time} min</td>
          <td>{calories}</td>
          <td>
            <button
              onClick={() => {
                handleCurrentCooks(clock);
              }}
              className="btn bg-green-400 hover:bg-green-500 border border-green-400 rounded-full text-black  md:text-lg font-semibold my-2"
            >
              Preparing
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Cook;
