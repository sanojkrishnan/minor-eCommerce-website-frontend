function Card() {
  return (
    <div>
      <div class="w-full max-w-md bg-gray-200 rounded-lg p-2 border-gray-400 rounded-base shadow-2xl shadow-gray-500 ">
        <a href="#">
          <div className="relative h-1/2 bg-linear-to-t from-black to-transparent">
            <img
              class="rounded-base rounded-md "
              src="/xcLa2kimeQeVMGWzQSjFRS-1200-80.jpg"
              alt="product image"
            />
            <div class="absolute w-full bottom-0 h-40 bg-linear-to-t from-black to-transparent "></div>
          </div>
        </a>
        <div class="flex items-center space-x-3 mb-6 text-amber-400 p-2 bg-linear-to-b from-black to-transparent rounded-b-md">
          <div>
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
              <a >
                <i className="fa-regular fa-star"></i>
              </a>
              <a >
                <i class="fa-regular fa-star"></i>
              </a>
              <a >
                <i class="fa-regular fa-star"></i>
              </a>
              <a >
                <i class="fa-regular fa-star"></i>
              </a>
              <a >
                <i class="fa-regular fa-star"></i>
              </a>
              <span class="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                4.8 out of 5
              </span>
            </div>
            <br />
            <a href="#">
              <h5 class="text-xl text-heading font-semibold tracking-tight text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight
              </h5>
            </a>
            <div class="flex items-center justify-between mt-6">
              <span class="text-3xl text-black font-extrabold text-heading">
                ₹599
              </span>
              <button
                type="button"
                class="inline-flex items-center rounded-md text-blue-500 bg-brand hover:bg-white shadow-xl font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
              >
                <svg
                  class="w-4 h-4 me-1.5"
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
        <button className=" text-white p-2 mb-4 rounded-md shadow-lg shadow-gray-500 w-full bg-blue-500 hover:scale-102">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Card;
