import { useState, useEffect } from "react";
import productExp from "../API/prodects";

function CartCard({ cart, onUpdate }) {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(cart.quantity);

  useEffect(() => {
    async function fetchCart() {
      try {
        const prod = await productExp.get(`/cart-item/${cart.itemId}`);
        setProduct(prod.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCart();
  }, [cart.itemId]);

  const handleIncrement = async () => {
    setQuantity(prev => prev + 1); // optimistic UI
    await productExp.patch(`/cart-item/${cart._id}/increment`);
    onUpdate && onUpdate(); // callback to parent to refresh cart
  };

  const handleDecrement = async () => {
    if (quantity <= 1) return;
    setQuantity(prev => prev - 1);
    await productExp.patch(`/cart-item/${cart._id}/decrement`);
    onUpdate && onUpdate();
  };

  const handleDelete =async () => {
    await productExp.delete(`/cart/${cart._id}`);
    onUpdate && onUpdate();
  };
  return (
    <>
      <div className="w-full p-4 bg-neutral-primary-soft">
        <div className="flex items-center justify-between mb-1"></div>
        <div className="flow-root p-4">
          <ul role="list" className="divide-y divide-default">
            <li className="py-4 sm:py-4 h-auto border-b-gray-200 shadow-lg">
              <div className="flex items-center gap-2">
                <div className=" w-fit">
                  <img
                    className=" max-h-50 w-auto rounded-t-lg"
                    src={`http://localhost:3000/${product.imageUrl}`}
                    alt="product image"
                  />
                  <div>
                    <button className="text-center w-1/2 rounded-bl-md text-white bg-blue-500 bg-brand hover:bg-blue-600 shadow-xl font-medium  rounded-base text-sm px-3 py-2 focus:outline-none">
                      Buy Now
                    </button>
                    <button
                      className="text-center w-1/2 rounded-br-md text-white bg-red-500 bg-brand hover:bg-red-600 shadow-xl font-medium  rounded-base text-sm px-3 py-2 focus:outline-none"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="flex-1 min-w-0 ms-10">
                  <p className="font-medium text-heading truncate">
                    {product.productName}
                  </p>
                  <p className="text-sm text-body truncate">
                    {product.category}
                  </p>{" "}
                  <br />
                  <div className="flex gap-4">
                    <button
                      className="text-center rounded-md text-white bg-blue-500 bg-brand hover:bg-blue-600 shadow-xl font-medium  text-sm px-3 py-2 focus:outline-none"
                      onClick={handleIncrement}
                    >
                      +
                    </button>{" "}
                    <p className="text-lg text-body truncate">
                      {quantity} Unit
                    </p>
                    <button
                      className="text-center rounded-md text-white bg-blue-500 bg-brand hover:bg-blue-600 shadow-xl font-medium  text-sm px-3 py-2 focus:outline-none"
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="flex items-center me-10 font-medium text-heading">
                  ₹ {product.offerPrice}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CartCard;
