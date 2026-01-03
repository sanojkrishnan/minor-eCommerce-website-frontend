import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/404";
import AddProduct from "./Pages/AddProduct";
import Cart from "./Pages/Cart";
import ProductDescription from "./Pages/ProductDescription";
import PopNotification from "./Component/PopNotification";
import SortingComp from "./Component/SortingComp";
import StateProvider from "./Context/StateProvider";
import { Toaster } from "react-hot-toast";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [adjust, setAdjust] = useState(false);

  const getChildData = (data) => {
    setSearchTerm(data);
  };
  const getAdjustment = (data) => {
    data ? setAdjust(true) : setAdjust(false);
  };
  return (
    <>
      <StateProvider>
        <NavBar sendData={getChildData} sendAdjustment={getAdjustment} />
        <div className="flex">
          {adjust && <SortingComp />}

          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/your-cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDescription />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <PopNotification />
        <Toaster />
      </StateProvider>
    </>
  );
}

export default App;
