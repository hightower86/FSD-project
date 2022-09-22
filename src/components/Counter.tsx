import { useState } from "react";
import "./Counter.scss";

type Props = {};

export const Counter = (props: Props) => {
  const [counter, setCounter] = useState(0);

  const increaseHandler = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increaseHandler}>increase</button>
    </>
  );
};
