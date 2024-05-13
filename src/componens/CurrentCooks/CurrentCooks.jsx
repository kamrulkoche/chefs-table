const CurrentCooks = ({ current }) => {
  //    console.log("Hello", current[0]);

  return (
    <>
      <h1 className="text-2xl font-semibold text-black text-center my-6">
        Currently cooking: {current.length}
      </h1>
      <hr />
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>

          {current.map((currentValue) => (
            <tbody key={currentValue.recipe_id}>
              <tr>
                <th>{currentValue.recipe_id}</th>
                <td>{currentValue.recipe_name}</td>
                <td>{currentValue.preparing_time}</td>
                <td>{currentValue.calories}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default CurrentCooks;
