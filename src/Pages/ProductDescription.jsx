import React, { useContext } from "react";
import Stars from "../Component/Stars";
import { MessageContext } from "../Context/StateContext";
import { useParams } from "react-router-dom";
import productExp from "../API/prodects";

function ProductDescription() {
  const { setViewMessage } = useContext(MessageContext);
  const params = useParams();
  const products = localStorage.getItem("products");
  let productsArray = [];
  try {
    productsArray = products ? JSON.parse(products) : [];
  } catch (err) {
    console.error("Failed to parse products from localStorage", err);
    productsArray = [];
  }

  const product = productsArray.find((item) => item._id === params.id);

  const handleClick = async () => {
    if (!product) return setViewMessage("Product not available");
    try {
      await productExp.post("/add-to-cart", {
        itemId: product._id,
        quantity: 1,
      });
      setViewMessage("Product Added To Cart Successfully!");
    } catch (err) {
      console.log(err);
      setViewMessage("Something Went Wrong!");
    }
  };

  if (!product) {
    return (
      <div className="p-6">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full ">
      <div className="bg-neutral-primary-soft p-2 md:flex justify-around w-full mt-10 rounded-xl border-gray-400 bg-linear-to-br from-gray-300 to-gray-100 shadow-xl ">
        <div className="p-4">
          <img
            className="rounded-xl lg:h-full "
            src={`http://localhost:3000/${product.imageUrl}`}
            alt=""
          />
        </div>
        <div className="p-6 text-center ">
          <div>
            <h3 className="mt-3 mb-6 text-4xl font-semibold tracking-tight text-heading">
              {product.productName}
            </h3>
            <p className="text-lg">{product.category}</p>
          </div>
          <div className=" h-full flex items-end justify-center">
            <div className="w-fit md:pb-30">
              <span className="text-amber-400">
                <Stars rating={product.rating} />
              </span>
              <br />
              <p>
                <span className="text-red-500 text-2xl line-through font-semibold ">
                  ₹ {product.price}
                </span>{" "}
                &nbsp;{" "}
                <span className="text-3xl text-green-500 ">
                  {product.offerPercentage}% OFF
                </span>
                <br />
                <br />
                <span className="font-extrabold text-5xl text-blue-500">
                  ₹ {product.offerPrice}
                </span>
              </p>
              <br /> <br />
              <div className="flex justify-evenly">
                <button className="text-center rounded-md text-white bg-blue-500 bg-brand hover:bg-blue-600 shadow-xl font-medium w-50 rounded-base text-sm px-3 py-2 focus:outline-none">
                  Buy Now
                </button>

                <button
                  type="button"
                  className="inline-flex md:w-30 items-center rounded-md text-blue-500 bg-brand hover:bg-white shadow-xl font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
                  onClick={handleClick}
                >
                  <svg
                    className="w-4 h-4 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
