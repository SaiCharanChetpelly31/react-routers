import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles.css";

export const BookLayout = () => {
  return (
    <div>
      <NavLink to="/books/1">Book 1</NavLink>
      <NavLink to="/books/2">Book 2</NavLink>
      <NavLink to="/books/3">Book 3</NavLink>
      <NavLink to="/books/new">newBook</NavLink>
      <Outlet context={{ hello: "world" }} />
    </div>
  );
};
