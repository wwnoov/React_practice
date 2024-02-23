import React from "react";
import Counter from "./Counter";
import Info from "./Info";
import CounterReducer from "./CounterReducer";
import Average from "./Average";

const App = () => {
  return (
    <div>
      <Average />
      <CounterReducer />
      <Info />
      <Counter />
    </div>
  );
};

export default App;
