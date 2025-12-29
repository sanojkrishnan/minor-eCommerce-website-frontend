import Stars from "./Stars";

function Card({ product }) {
  return (
    <>
      <div className="w-full h-130 max-w-md mt-6 bg-gray-200 rounded-lg p-3 border-gray-400 rounded-base shadow-2xl shadow-gray-500 hover:scale-102 duration-300 ">
        <div className="relative h-50 overflow-hidden bg-linear-to-t from-black to-transparent">
          <img
            className="rounded-base rounded-md "
            src={`http://localhost:3000/${product.imageUrl}`}
            alt="product image"
          />
          <div className="absolute w-full bottom-0 h-3/4 bg-linear-to-t from-black to-transparent "></div>
        </div>

        <div className="space-x-3 text-amber-400 p-2 bg-linear-to-b from-black to-transparent rounded-b-md">
          <div>
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <Stars rating={product.rating} />
              <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                {product.rating} out of 5
              </span>
            </div>
            <h5 className="text-xl h-20 w-full overflow-hidden pt-4 text-heading font-semibold tracking-tight text-white">
              {product.productName}
            </h5>
            <div className="flex items-end justify-between mt-6">
              <div>
                <p className=" px-2 rounded-md bg-white">
                  
                <span className="text-md text-red-500 font-semibold line-through">
                  ₹ {product.price}
                </span>
                &nbsp;
                <span className="text-lg font-semibold text-blue-500">
                  {product.offerPercentage}% off
                </span>
                  </p>
                <br />
                <span className="text-3xl text-black font-extrabold text-heading">
                  ₹ {product.offerPrice}
                </span>
              </div>
            </div>
          </div>
          <div className="pt-3">
            <button className=" text-white p-2 mb-4 rounded-md shadow-lg shadow-gray-500 w-full bg-blue-500 hover:scale-102">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
