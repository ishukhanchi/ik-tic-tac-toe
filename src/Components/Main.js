import React, { useState } from "react";

const DEFAULT_ARRAY = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const Button = (props) => {
  return <button onClick={props.doThis}>{props.currentValue}</button>;
};

const Main = () => {
  const [arr, setArr] = useState(DEFAULT_ARRAY); //Defining Hook to store current state as a 2-D array and setArr to update the current state
  const [nextPlayerX, setNextPlayerX] = useState(true); //Defining Hook to store current player as "X" and toggle the player to "O" on updating the state

  const handleChangeState = (x, y) => {
    const newState = arr.map((x) => x.slice()); // state can't be mutated, so creating a copy of the array to change the state
    newState[x][y] = nextPlayerX ? "X" : "O";
    setArr(newState);

    setNextPlayerX(!nextPlayerX);
  };

  const status = "Next Player: " + (nextPlayerX ? "X" : "O");

  return (
    <div>
      <div>{status}</div>
      {arr.map((value, x) => {
        return (
          <div>
            {value.map((item, y) => {
              return (
                <Button
                  currentValue={arr[x][y]}
                  doThis={() => {
                    handleChangeState(x, y); // to return 3x3 matrix rendering 9 buttons
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Main;
