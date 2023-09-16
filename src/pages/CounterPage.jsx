// import { useState } from "react";

import { useReducer } from "react";

const reducer = (state, action) => {
  // if (action === "increase") {
  //   return state + 1;
  // } else if (action === "decrease") {
  //   return state - 1;
  // } else {
  //   return state;
  // }
  switch (action.type) {
    case "increase":
      return state + action.data;
    case "decrease":
      return state - action.data;
    default:
      state;
  }
};

const CounterPage = () => {
  const [counter, dispatch] = useReducer(reducer, 0);
  // const [counter, setCounter] = useState(0);
  // const decrease = () => {
  //   setCounter(counter - 1);
  // };
  // const increase = () => {
  //   setCounter(counter + 1);
  // };
  return (
    <div>
      <h1>CounterPage {counter}</h1>
      {/* <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button> */}
      <button onClick={() => dispatch({ type: "decrease", data: 2 })}>-</button>
      <button onClick={() => dispatch({ type: "increase", data: 3 })}>+</button>
    </div>
  );
};

export default CounterPage;
