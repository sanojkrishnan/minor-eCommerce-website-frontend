import { useState } from "react";
import { Link } from "react-router-dom";
import SortingComp from "./SortingComp";

function NavBar({ sendData, sendAdjustment }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowing = () => {
    setShowMenu(!showMenu);
    sendAdjustment(!showMenu);
  };
  return (
    <>
      <div className=" py-9 ">
        <nav className="fixed top-0 z-30 w-full p-3 bg-blue-500 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px">
          <div className=" w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex  items-center justify-between">
                <Link to={"/"}>
                  <div className=" w-15">
                    <img
                      className="rounded-full"
                      src="/Gemini_Generated_Image_ewat61ewat61ewat.png"
                      alt="logo"
                    />
                  </div>
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <button
                      href="#"
                      className="rounded-md px-3 py-2 text-xl font-medium text-gray-200 hover:text-black hover:bg-white/5"
                      onClick={handleShowing}
                    >
                      <i class="fa-solid fa-list"></i>
                    </button>
                    &nbsp; &nbsp; &nbsp;
                    <Link
                      to={"/add-product"}
                      href="#"
                      className="rounded-md px-3 py-3 text-sm font-medium bg-blue-400 text-gray-900 hover:bg-white/5 hover:text-white"
                    >
                      Add Product
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div
                  type="button"
                  className="relative rounded-full pl-2 pr-20 border-white"
                >
                  <input
                    className="p-2 font-bold border-0 outline-0 text-white hover:text-black"
                    type="text"
                    placeholder="Search Here..."
                    onChange={(e) => sendData(e.target.value.toLowerCase())}
                  />
                </div>

                <Link to={"/your-cart"}>
                  <svg
                    className="w-8 h-8 me-1.5 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
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
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
