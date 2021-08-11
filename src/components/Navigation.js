import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

//하단 메뉴 바, 알림 버튼

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;