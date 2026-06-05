import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./auth/pages/Signup";
import Login from "./auth/pages/Login";
import Home from "./auth/pages/Home";
import Loading from "./auth/pages/Loading";
import User from "./auth/pages/User";

const App = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  );
};

export default App;
