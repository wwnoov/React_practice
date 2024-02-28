import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goArticles = () => {
    navigate("/articles", { replace: false });
  };
  const goHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={goHome}>홈</button>
        <button onClick={goArticles}>게시글목록</button>
        <button onClick={goBack}>뒤로가기</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
