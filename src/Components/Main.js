import React, { useState } from "react";

const DEFAULT_ARRAY = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const Main = () => {
  //Defining Hook to store current state as 2-D array and setArr to update the current state
  const [arr, setArr] = useState(DEFAULT_ARRAY);

  //to change the state
  const handleChangeState = (x, y) => {
    // const newState = arr.map((x) => {
    //   return x.slice();
    // });
    const newState = arr.map((x) => x.slice());
    newState[x][y] = 1;
    setArr(newState);
    console.log(x, y);
  };

  return (
    //to return 3x3 matrix rendering 9 buttons
    <div>
      {arr.map((value, x) => {
        return (
          <div>
            {value.map((item, y) => {
              return (
                <button
                  onClick={() => {
                    handleChangeState(x, y);
                  }}
                >
                  {arr[x][y]}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Main;
