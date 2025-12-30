import React, { useContext, useEffect, useState } from "react";
import Card from "../Component/Card";
import { Link } from "react-router-dom";
import productExp from "../API/prodects";
import Loading from "../Component/Loading";
import NotFound from "./404";
import { SortContext } from "../Context/StateContext";
import Pagination from "../Component/Pagination";

function Home({ searchTerm }) {
  const [products, setProducts] = useState([]); // Correctly initialize state as an array
  const [loaded, setLoaded] = useState(false);
  const [error, settError] = useState(false);
  const LOCAL_STORAGE_KEY = "products";
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProduct, setSortedProduct] = useState([]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const pagedData = sortedProduct.slice(firstPostIndex, lastPostIndex);

  const { sorter, initialSort } = useContext(SortContext);
  console.log("sorter", sorter);

  console.log("sortedProduct", sortedProduct);
  console.log("filteredProducts", filteredProducts);

  //-----------------------------------sorting

  useEffect(() => {
    if (sorter === initialSort) {
      setSortedProduct(filteredProducts);
    } else {
      if (sorter.lowerPrice >= 0 && sorter.higherPrice > sorter.lowerPrice) {
        const priceSort = filteredProducts.filter(
          (item) =>
            item.offerPrice >= sorter.lowerPrice &&
            item.offerPrice < sorter.higherPrice
        );
        setSortedProduct(priceSort);
      }
    }
  }, [sorter, initialSort, filteredProducts]);


  useEffect(() => {
    if(sorter.sortBy === "name"){
      let nameSort = [...sortedProduct].sort((a,b) => a.productName.localeCompare(b.productName))
      console.log("name sort",nameSort);
      
    }
  }, [sorter, sortedProduct])


  // useEffect(() => {
  //  if (sorter.sortBy === "name") {
  //       let nameSort = [...sortedProduct].sort((a, b) =>
  //         a.productName.localeCompare(b.productName)
  //       );
  //       setSortedProduct(nameSort);
  //     }
  //     if (sorter.sortBy === "lowerPrice") {
  //       let lowerPriceSort = [...sortedProduct].sort(
  //         (a, b) => a.offerPrice - b.offerPrice
  //       );
  //       setSortedProduct(lowerPriceSort);
  //     }
  //     if (sorter.sortBy === "higherPrice") {
  //       let lowerPriceSort = [...sortedProduct].sort(
  //         (a, b) => b.offerPrice - a.offerPrice
  //       );
  //       setSortedProduct(lowerPriceSort);
  //     }
  //     if (sorter.category !== "all") {
  //       const sortedCategory = sortedProduct.filter(
  //         (item) => item.category === sorter.category
  //       );
  //       setSortedProduct(sortedCategory);
  //     }
  // }, [sorter, initialSort, filteredProducts, sortedProduct]);

  //search functionality
  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter((item) => {
        return (
          item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  //fetching data from backend --------------------

  useEffect(() => {
    async function fetchProducts() {
      try {
        const prod = await productExp.get(`/`);
        if (prod) {
          setProducts(prod.data); // Extract data from the Axios response
        }
        setLoaded(true);
      } catch (err) {
        console.log(err);
        settError(true);
        setLoaded(true);
      }
    }

    fetchProducts();
  }, []);

  //-----------------------------------------

  useEffect(() => {
    ///saving it in local storage as cache
    if (loaded) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products)); //here we are using local storage to store the contacts array in the browser.
    }
  }, [products, loaded]); //this will run every time the contacts array changes or when the component is loaded.

  if (error) {
    return <NotFound />;
  }

  if (!loaded) {
    return <Loading />;
  }

  if (pagedData.length === 0) {
    return (
      <div className="w-full h-100 md:h-200 flex justify-center items-center">
        <h1 className="text-4xl">No Product Found</h1>
      </div>
    );
  }
  if (pagedData) {
    return (
      <>
        <div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pagedData.map((product) => (
              <Link key={product._id} to={`/product/${product._id}`}>
                <Card product={product} />
              </Link>
            ))}
          </div>
          <div className="p-15"></div>
        </div>
        <div className="fixed">
          <Pagination
            totalPosts={sortedProduct.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </>
    );
  }
}

export default Home;
