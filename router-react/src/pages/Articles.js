import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  const activeStyle = { color: "green", fontsize: 21 };
  return (
    <div>
      <Outlet />
      <NavLink
        to="/articles/1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 1
      </NavLink>
      |
      <NavLink
        to="/articles/2"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 2
      </NavLink>
      |
      <NavLink
        to="/articles/3"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 3
      </NavLink>
    </div>
  );
};

export default Articles;
