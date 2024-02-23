import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  /* useEffect(() => {
    console.log("렌더링 완료");
    console.log({ name });
  }, []);*/
  useEffect(() => {
    console.log("useEffect", { name });
    return () => {
      console.log("cleanup", { name });
    };
  }, [name]);
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      name : {name}
    </div>
  );
};

export default Info;
