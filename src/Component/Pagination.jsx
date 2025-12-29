import React from "react";

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
    console.log("totalPosts:", totalPosts);
    console.log("postPerPage:", postsPerPage);
  }
  console.log("postPerPage:", currentPage);

  return (
    <div className="fixed bottom-4 z-40 w-full flex justify-center">
      <div className="bg-amber-50 overflow-hidden rounded-2xl flex justify-between shadow-2xl w-200 p-4">
        <div className="p-4">
          <button
            className="bg-blue-500 p-2 px-4 rounded-md"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            Prev
          </button>
        </div>
        <div className=" w-100 overflow-hidden">
          <div className=" flex justify-center p-4 ">
            {pages.map((item, index) => {
              return (
                <button
                  className={
                    item === currentPage
                      ? " bg-blue-700 w-6 rounded-sm hover:scale-110 text-white h-6 ml-3"
                      : " bg-blue-500 w-6 rounded-sm hover:scale-110 text-white h-6 ml-3"
                  }
                  onClick={() => setCurrentPage(item)}
                  key={index}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="p-4">
          <button
            className="bg-blue-500 p-2 px-4 rounded-md"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, pages.length))
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
