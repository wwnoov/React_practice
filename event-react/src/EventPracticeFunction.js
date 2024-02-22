import React, { useState } from "react";

const EventPracticeFunction = () => {
  // const [message, setMessage] = useState("");
  // const [username, setUserName] = useState("");
  const [form, setForm] = useState({ username: "", message: "" });
  const { username, message } = form;

  /* const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };
  const onChangeusername = (e) => {
    setUserName(e.target.value);
  };*/
  const onChange = (e) => {
    setForm({ form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>이벤트 연습 - 함수</h1>
      <input
        type="text"
        name="message"
        placeholder="입력해주세요"
        //onChange={onChangeMessage}
        onChange={onChange}
      />
      <br />
      message:{message}
      <hr />
      <input
        type="text"
        name="username"
        placeholder="입력해주세요"
        //onChange={onChangeusername}
        onChange={onChange}
      />
      <br />
      username:{username}
    </div>
  );
};

export default EventPracticeFunction;
