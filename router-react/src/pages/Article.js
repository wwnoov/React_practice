import React from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>게시글id : {id}</h2>
    </div>
  );
};

export default Article;
