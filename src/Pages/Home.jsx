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
  const [nameSortedProduct, setNameSortedProduct] = useState([]);
  const [categorySortedProduct, setCategorySortedProduct] = useState([]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const pagedData = categorySortedProduct.slice(firstPostIndex, lastPostIndex);

  const { sorter, initialSort } = useContext(SortContext);
  console.log("sorter", sorter);

  //-----------------------------------sorting

  useEffect(() => {
    if (sorter === initialSort) {
      setSortedProduct(filteredProducts);
    } else {
      if (sorter.lowerPrice >= 0 && sorter.higherPrice > sorter.lowerPrice) {
        const priceSort = filteredProducts.filter(
          (item) =>
            item.offerPrice >= sorter.lowerPrice &&
            item.offerPrice <= sorter.higherPrice
        );
        setSortedProduct(priceSort);
      }
    }
  }, [sorter, initialSort, filteredProducts]);

  useEffect(() => {
    let namePriceSort = [...sortedProduct];

    if (sorter.sortBy === "name") {
      namePriceSort.sort((a, b) =>
        (a.productName || "").localeCompare(b.productName || "")
      );
    } else if (sorter.sortBy === "ascending") {
      namePriceSort.sort((a, b) => a.offerPrice - b.offerPrice);
    } else if (sorter.sortBy === "descending") {
      namePriceSort.sort((a, b) => b.offerPrice - a.offerPrice);
    }

    setNameSortedProduct(namePriceSort);
  }, [sorter, sortedProduct]);

  useEffect(() => {
    // If "all" is selected or no category selected
    if (
      !sorter.category ||
      sorter.category.length === 0 ||
      sorter.category.includes("all")
    ) {
      setCategorySortedProduct(nameSortedProduct);
    } else {
      const categoryFiltered = nameSortedProduct.filter((item) =>
        sorter.category.includes(item.category)
      );
      setCategorySortedProduct(categoryFiltered);
    }
  }, [nameSortedProduct, sorter]);
  //search functionality
  useEffect(() => {
    if (searchTerm.trim() !== "") {
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
            totalPosts={categorySortedProduct.length}
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
