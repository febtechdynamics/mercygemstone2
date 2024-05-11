import React, { useState } from "react";

const Filter = ({ options, setOptions, showOptions, setShowOptions }) => {
  const optionsData = ["GemStone", "Industrial Materials", "Jewelry", "Others"];

  return (
    <div>
      <div className="flex">
        <div className=" px-3  md:w-[230px] w-full text-gray-900 dark:text-gray-100">
          <div className="relative w-full group">
            <label className="text-xs text-gray-600">Select Category</label>
            <button
              className="text-gray-600 py-2.5 px-3 w-full md:text-sm text-site bg-transparent border border-dimmed  focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold"
              onClick={() => setShowOptions(!showOptions)}
            >
              {options}
            </button>

            <div
              className={`absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 ${
                !showOptions ? "opacity-0 invisible" : ""
              }  duration-200 p-1 bg-gray-100   border border-dimmed text-xs md:text-sm text-gray-600`}
            >
              <div
                className=" w-full block text-gray-600 cursor-pointer hover:bg-white   hover:text-link px-3 py-2 rounded-md"
                onClick={() => {
                  setOptions("All");
                  setShowOptions(false);
                }}
              >
                All
              </div>
              {optionsData?.map((option) => (
                <div
                  key={option}
                  className=" w-full block text-gray-600 cursor-pointer hover:bg-white   hover:text-link px-3 py-2 rounded-md"
                  onClick={() => {
                    setOptions(option);
                    setShowOptions(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
