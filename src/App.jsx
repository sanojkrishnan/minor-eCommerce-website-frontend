import React from "react";
import NavBar from "./Component/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/404";
import AddProduct from "./Pages/AddProduct";
import Cart from "./Pages/Cart";
import Loading from "./Component/Loading";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/your-cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
