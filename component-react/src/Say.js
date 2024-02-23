import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => {
    setMessage("hi");
  };
  const onClickLeave = () => {
    setMessage("bye");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
    </div>
  );
};

export default Say;
