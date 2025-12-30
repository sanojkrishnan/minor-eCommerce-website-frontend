import { useContext, useState } from "react";
import { SortContext } from "../Context/StateContext";

function SortingComp() {
  const { setSorter, initialSort } = useContext(SortContext);
  const [tempSorter, setTempSorter] = useState(initialSort);

  const handleCheck = (value) => {
    setTempSorter((prev) => {
      // If "all" is clicked
      if (value === "all") {
        return {
          ...prev,
          category: prev.category.includes("all") ? [] : ["all"],
        };
      }
      // If any other category is clicked
      const exists = prev.category.includes(value);

      return {
        ...prev,
        category: exists
          ? prev.category.filter((c) => c !== value) // remove
          : [...prev.category.filter((c) => c !== "all"), value], // add & remove "all"
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSorter(tempSorter);
  };

  return (
    <div className="sorting w-170 h-full ">
      <div className="price fixed z-20 left-0 h-full max-w-120 p-8 font-semibold text-white bg-linear-to-b from-blue-500 via-purple-500 to-pink-500">
        <form onSubmit={handleSubmit}>
          <h4 className="text-2xl mt-6 font-bold m-2 mb-8">Price Range</h4>
          <div className="flex justify-between">
            <label className="ml-2" htmlFor="lower">
              Lower Price :
            </label>
            <input
              className="border pl-3 p-2 rounded-xl ml-2"
              id="lower"
              type="number"
              placeholder="₹"
              value={tempSorter.lowerPrice ? tempSorter.lowerPrice : ""}
              onChange={(e) =>
                setTempSorter({
                  ...tempSorter,
                  lowerPrice:
                    e.target.value === "" ? "" : Number(e.target.value),
                })
              }
            />
          </div>
          <br />
          <div className="flex justify-between">
            <label className="ml-2" htmlFor="higher">
              Higher Price :
            </label>
            <input
              className="border pl-3 p-2 rounded-xl ml-2"
              id="higher"
              type="number"
              placeholder="₹"
              value={tempSorter.higherPrice ? tempSorter.higherPrice : ""}
              onChange={(e) =>
                setTempSorter({
                  ...tempSorter,
                  higherPrice:
                    e.target.value === "" ? "" : Number(e.target.value),
                })
              }
            />
          </div>

          <div className="flex justify-evenly mt-6">
            <div className="flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                checked={tempSorter.sortBy === "name"}
                name="default-radio"
                className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                onChange={() =>
                  setTempSorter({ ...tempSorter, sortBy: "name" })
                }
              />
              <label
                htmlFor="default-radio-1"
                className="select-none ms-2 text-sm font-medium text-heading"
              >
                Name
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-2"
                type="radio"
                value=""
                checked={tempSorter.sortBy === "ascending"}
                name="default-radio"
                className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                onChange={() =>
                  setTempSorter({ ...tempSorter, sortBy: "ascending" })
                }
              />
              <label
                htmlFor="default-radio-2"
                className="select-none ms-2 text-sm font-medium text-heading"
              >
                Ascending
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-3"
                type="radio"
                checked={tempSorter.sortBy === "descending"}
                name="default-radio"
                className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                onChange={() =>
                  setTempSorter({ ...tempSorter, sortBy: "descending" })
                }
              />
              <label
                htmlFor="default-radio-3"
                className="select-none ms-2 text-sm font-medium text-heading"
              >
                Descending
              </label>
            </div>
          </div>

          <div className="mt-10">
            <div className=" text-white text-2xl font-bold mb-8" type="button">
              Category
            </div>
            <div>
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="all"
                  className="appearance-none cursor-pointer checked:bg-white w-6 h-6 bg-transparent border rounded-sm  focus:ring-0 focus:ring-brand-soft"
                  checked={tempSorter.category.includes("all")}
                  onChange={(e) => {
                    handleCheck(e.target.value);
                  }}
                />
                <label
                  htmlFor="default-checkbox"
                  className="select-none ms-2 text-lg font-medium text-heading"
                >
                  All
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value="electronics"
                  className="appearance-none cursor-pointer checked:bg-white w-6 h-6 bg-transparent border rounded-sm  focus:ring-0 focus:ring-brand-soft"
                  checked={tempSorter.category.includes("electronics")}
                  onChange={(e) => {
                    handleCheck(e.target.value);
                  }}
                />
                <label
                  htmlFor="checkbox-1"
                  className="select-none ms-2 text-lg font-medium text-heading"
                >
                  Electronics
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="checkbox-2"
                  type="checkbox"
                  value="beauty"
                  className="appearance-none cursor-pointer checked:bg-white w-6 h-6 bg-transparent border rounded-sm  focus:ring-0 focus:ring-brand-soft"
                  checked={tempSorter.category.includes("beauty")}
                  onChange={(e) => {
                    handleCheck(e.target.value);
                  }}
                />
                <label
                  htmlFor="checkbox-2"
                  className="select-none ms-2 text-lg font-medium text-heading"
                >
                  Beauty Products
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="checkbox-3"
                  type="checkbox"
                  value="clothes"
                  className="appearance-none cursor-pointer checked:bg-white w-6 h-6 bg-transparent border rounded-sm  focus:ring-0 focus:ring-brand-soft"
                  checked={tempSorter.category.includes("clothes")}
                  onChange={(e) => {
                    handleCheck(e.target.value);
                  }}
                />
                <label
                  htmlFor="checkbox-3"
                  className="select-none ms-2 text-lg font-medium text-heading"
                >
                  Clothes
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="checkbox-4"
                  type="checkbox"
                  value="home"
                  className="appearance-none cursor-pointer checked:bg-white w-6 h-6 bg-transparent border rounded-sm  focus:ring-0 focus:ring-brand-soft"
                  checked={tempSorter.category.includes("home")}
                  onChange={(e) => {
                    handleCheck(e.target.value);
                  }}
                />
                <label
                  htmlFor="checkbox-4"
                  className="select-none ms-2 text-lg font-medium text-heading"
                >
                  Home Appliances
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className=" border-white w-full rounded-md bg-amber-50 text-black font-semibold p-2 px-6 mt-2 submit"
            >
              Go
            </button>
          </div>
        </form>
        <div>
          <div className="flex justify-center">
            <button
              className=" border-white w-full rounded-md bg-amber-50 text-black font-semibold p-2 px-6 mt-2 submit"
              onClick={() => {
                setTempSorter(initialSort);
                setSorter(initialSort);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortingComp;
