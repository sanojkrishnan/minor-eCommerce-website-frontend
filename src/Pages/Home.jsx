import React, { useEffect, useState } from "react";
import Card from "../Component/Card";
import { Link } from "react-router-dom";
import productExp from "../API/prodects";
import Loading from "../Component/Loading";

function Home() {
  const [products, setProducts] = useState([]); // Correctly initialize state as an array
  const [loaded, setLoaded] = useState(false);
  const LOCAL_STORAGE_KEY = "products";

  useEffect(() => {
    async function fetchProducts() {
      try {
        const prod = await productExp.get("/");
        if (prod) {
          setProducts(prod.data); // Extract data from the Axios response
        }
        setLoaded(true);
      } catch (err) {
        console.log(err);
        return <p className="text-xl">Something went wrong...</p>;
      }
    }

    fetchProducts(); // Removed unnecessary argument
  }, []);

  useEffect(() => {
    ///saving it in local storage as cache
    if (loaded) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products)); //here we are using local storage to store the contacts array in the browser.
    }
  }, [products, loaded]); //this will run every time the contacts array changes or when the component is loaded.
  

  if (!loaded) {
    return <Loading />;
  } else {
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
}

export default Home;
