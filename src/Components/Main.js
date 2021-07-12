import React, { useState, useEffect } from "react";
import { BsSquare, BsXSquare } from "react-icons/bs";
import { FiCircle } from "react-icons/fi";

const DEFAULT_ARRAY = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const Button = (props) => {
  if (props.currentValue === "X") {
    return (
      <button onClick={props.doThis}>
        <BsXSquare />
      </button>
    );
  }
  if (props.currentValue === "O") {
    return (
      <button onClick={props.doThis}>
        <FiCircle />
      </button>
    );
  }
  return (
    <button onClick={props.doThis}>
      <BsSquare />
    </button>
  );
};

// Algorithm to find the winner
const hasSomeoneWon = (state) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    const val1 = state[Math.floor(a / 3)][a % 3];
    const val2 = state[Math.floor(b / 3)][b % 3];
    const val3 = state[Math.floor(c / 3)][c % 3];

    if (val1 === val2 && val2 === val3) {
      if (val1 !== 0) return true;
    }
  }
  return null;
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

  useEffect(() => {
    if (hasSomeoneWon(arr) === true) {
      const winnerName = nextPlayerX ? "Winner is O" : "Winner is X"; //to display the winner
      alert(winnerName);
    }
  }, [arr]);

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
