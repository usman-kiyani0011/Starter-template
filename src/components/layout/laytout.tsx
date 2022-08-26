import React from "react";
import { Outlet } from "react-router-dom";

const Laytout = () => {
  return (
    <div>
      <h1>Laytout</h1>
      <Outlet />
    </div>
  );
};

export default Laytout;
