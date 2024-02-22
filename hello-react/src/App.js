import React from "react";

const App = () => {
  const name = "React";
  const nameBlack = undefined;
  return (
    <>
      <h1
        style={{
          backgroundColor: "black",
          color: "aqua",
          fontSize: "48px",
        }}
      >
        {name + 1} hi!
      </h1>
      <h2>Hello React</h2>
      {name === "React" ? "리액트" : "리액트아닙니다"}
      <br />
      {name === "React" ? "리액트" : null}
      <br />
      {name === "React" && "리액트"}
      <br />
      {nameBlack || "default value"}
    </>
  );
};

export default App;
