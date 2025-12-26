import React from "react";

function ProductDescription() {

  return (
    <div>
      <div className="bg-neutral-primary-soft p-2 md:flex justify-evenly  m-10 rounded-xl border-gray-400 bg-linear-to-br from-gray-300 to-gray-100 shadow-xl ">
        <div className="p-4">
          <img
            className="rounded-xl lg:h-full "
            src="/xcLa2kimeQeVMGWzQSjFRS-1200-80.jpg"
            alt=""
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="mt-3 mb-6 text-4xl font-semibold tracking-tight text-heading">
            Streamlining your design process today.
          </h3>
          <div className="flex justify-evenly">

            <button className="text-center rounded-md text-white bg-blue-500 bg-brand hover:bg-blue-600 shadow-xl font-medium w-50 rounded-base text-sm px-3 py-2 focus:outline-none">
          Buy Now
        </button>

          <button
                type="button"
                className="inline-flex items-center rounded-md text-blue-500 bg-brand hover:bg-white shadow-xl font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                </svg>
                Add to cart
              </button>
                    </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
