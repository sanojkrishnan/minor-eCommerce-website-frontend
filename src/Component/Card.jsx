import Stars from "./Stars";

function Card({ product }) {
  return (
    <div>
      <div className="w-full h-150 max-w-md mt-6 bg-gray-200 rounded-lg p-3 border-gray-400 rounded-base shadow-2xl shadow-gray-500 hover:scale-102 duration-300 ">
        <a href="#">
          <div className="relative h-1/2 bg-linear-to-t from-black to-transparent">
            <img
              className="rounded-base rounded-md "
              src="/xcLa2kimeQeVMGWzQSjFRS-1200-80.jpg"
              alt="product image"
            />
            <div className="absolute w-full bottom-0 h-3/4 bg-linear-to-t from-black to-transparent "></div>
          </div>
        </a>
        <div className="flex items-center space-x-3 mb-6 text-amber-400 p-2 bg-linear-to-b from-black to-transparent rounded-b-md">
          <div>
            <div className="flex items-center space-x-1 rtl:space-x-reverse">

              <Stars rating={product.rating} />
              <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                {product.rating} out of 5
              </span>
            </div>
            <br />
            <a href="#">
              <h5 className="text-xl text-heading font-semibold tracking-tight text-white">
                {product.productName}
              </h5>
            </a>
            <div className="flex items-center justify-between mt-6">
              <p><span className="text-md text-red-500 font-semibold line-through">₹ {product.price}</span> &nbsp;<span className="text-lg font-semibold text-blue-500"> {product.offerPercentage}% off</span><br /><span className="text-3xl text-black font-extrabold text-heading">
                ₹ {product.offerPrice}
              </span>
              </p>
              
            </div>
          </div>
        </div>
          <button className=" text-white p-2 mb-4 rounded-md shadow-lg shadow-gray-500 w-full bg-blue-500 hover:scale-102">
            Buy Now
          </button>
      </div>
    </div>
  );
}

export default Card;
