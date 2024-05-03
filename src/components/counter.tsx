import React, { useState } from "react";
import classes from "./Counter.module.scss";
const Counter = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const onCounterClick = (): void => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1 className={classes.red}>{count}</h1>
      <button className={classes.btn} onClick={onCounterClick}>COUNT +1</button>
    </div>
  );
};

export default Counter;
