import React from "react";

function CartCard() {
  return (
    <>
      <div className="w-full p-6 bg-neutral-primary-soft">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-2xl font-semibold leading-none text-heading">
            Your Cart
          </h5>
        </div>
        <div className="flow-root p-4">
          <ul role="list" className="divide-y divide-default">
            <li className="py-4 sm:py-4 h-auto border-b-gray-200 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="shrink-0">
                  <img
                    className=" max-h-50 w-auto rounded-lg"
                    src="/xcLa2kimeQeVMGWzQSjFRS-1200-80.jpg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-10">
                  <p className="font-medium text-heading truncate">Neil Sims</p>
                  <p className="text-sm text-body truncate">email@windster.com</p>
                  
                </div>
                <div className="inline-flex items-center me-10 font-medium text-heading">
                  ₹320
                  
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
