import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../components/admin/admin";
import Editor from "../components/editor/editor";
import Home from "../components/home/home";
import Laytout from "../components/layout/laytout";
import Login from "../components/login/login";
import Lounge from "../components/lounge/lounge";
import NotFound from "../components/not-found/not-found";
import Unauthorized from "../components/unauthorized/unauthorized";
import PrivateRoutes from "./private-routes";

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

const Routeing = () => {
  return (
    <Routes>
      <Route path="/" element={<Laytout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<PrivateRoutes allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<PrivateRoutes allowedRoles={[ROLES.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>

        <Route element={<PrivateRoutes allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route
          element={<PrivateRoutes allowedRoles={[ROLES.Editor, ROLES.Admin]} />}
        >
          <Route path="lounge" element={<Lounge />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Routeing;
