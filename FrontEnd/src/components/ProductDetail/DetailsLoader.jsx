import React from "react";

const DetailsLoader = () => {
  return (
    <div class="flex w-full mt-10 h-50 items-center justify-center">
      <div class="w-full px-5">
        <div class="max-w-full flex flex-col md:flex-row  w-sm rounded overflow-hidden shadow-lg animate-pulse">
          <div className="w-full p-5 max-h-screen h-96">
            <div class="h-full w-full  bg-gray-300"></div>
          </div>
          <div className=" flex flex-col gap-5 h-96 mt-7 mx-auto w-full px-5 md:px-3">
            <div class="flex flex-col gap-3 w-full py-4 ">
              {/* title */}
              <div class="h-8 w-96 bg-gray-300 mb-2 "></div>
              {/* price */}
              <div class="h-6 w-32 bg-gray-300 "></div>
            </div>
            <div class="pb-2  flex flex-col gap-3">
              {/* description */}
              <div class="h-4 w-44 bg-gray-300 "></div>
              <div class="h-16 w-full bg-gray-300 "></div>
            </div>
            <div class="pb-2 pr-5 flex flex-col gap-3">
              {/* button */}
              <div class="h-10 w-52 rounded-full bg-gray-300 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsLoader;
