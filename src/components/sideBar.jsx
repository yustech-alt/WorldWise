import React from "react";
import style from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";

export default function SideBar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={style.footer}>
        <p className={style.copyright}>
          &copy; copyright {new Date().getFullYear()} by WorldWise inc
        </p>
      </footer>
    </div>
  );
}
