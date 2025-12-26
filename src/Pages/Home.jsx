import React, { useEffect, useState } from "react";
import Card from "../Component/Card";
import { Link } from "react-router-dom";
import productExp from "../API/prodects";

function Home() {
  const [products, setProducts] = useState([]); // Correctly initialize state as an array

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await productExp.get("/");
        setProducts(res.data); // Extract data from the Axios response
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts(); // Removed unnecessary argument
  }, []);


  

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product) => (
        <Link key={product._id} to={`/product/${product._id}`}>
          <Card product={product} />
        </Link>
      ))}
    </div>
  );
}

export default Home;
