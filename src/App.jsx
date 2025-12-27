import React from "react";
import NavBar from "./Component/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/404";
import AddProduct from "./Pages/AddProduct";
import Cart from "./Pages/Cart";
import ProductDescription from "./Pages/ProductDescription";
import MessageProvider from "./Context/MessageProvider";
import PopNotification from "./Component/PopNotification";

function App() {
  return (
    <>
      <MessageProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/your-cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <PopNotification />
      </MessageProvider>
    </>
  );
}

export default App;
