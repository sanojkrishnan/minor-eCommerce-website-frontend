import React from "react";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Component/404";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
