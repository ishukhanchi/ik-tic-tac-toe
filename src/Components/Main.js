import React, { useState } from "react";

const DEFAULT_ARRAY = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const Main = () => {
  const [arr, setArr] = useState(DEFAULT_ARRAY);

  return (
    //to return 3x3 matrix rendering 9 buttons
    <div>
      {arr.map((value, index) => {
        return (
          <div>
            {value.map((item, count) => {
              return <button>Hi</button>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Main;
