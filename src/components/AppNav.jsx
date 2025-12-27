import React from "react";
import style from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

export default function AppNav() {
  return (
    <nav className={style.nav}>
      <ul>
        <NavLink to="cities">Cities</NavLink>
      <NavLink to="countries">Countries</NavLink>
      </ul>
    </nav>
  );
}
