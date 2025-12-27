import React, { useEffect, useState } from "react";
import CartCard from "../Component/CartCard";
import productExp from "../API/prodects";
import Loading from "../Component/Loading";
import NotFound from "./404";

function Cart() {
  const [carts, setCarts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const fetchCarts = async () => {
    try {
      const res = await productExp.get("/cart");
      setCarts(res.data);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  if (!loaded) return <Loading />;

  if (error) return <NotFound />;

  if (carts.length === 0) {
    return (
      <p className="ml-10 mt-10 text-lg text-gray-500">Your cart is empty</p>
    );
  }

  return (
    <>
      <h5 className="text-2xl pt-10 ml-10 font-semibold leading-none text-heading">
        Your Cart
      </h5>
      {carts.map((item) => (
        <CartCard cart={item} key={item._id} onUpdate={fetchCarts()} />
      ))}
    </>
  );
}

export default Cart;
