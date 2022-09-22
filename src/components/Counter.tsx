import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseHandler = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h1>{counter}</h1>
      <button className={classes.btn} onClick={increaseHandler}>
        increase
      </button>
    </>
  );
};
