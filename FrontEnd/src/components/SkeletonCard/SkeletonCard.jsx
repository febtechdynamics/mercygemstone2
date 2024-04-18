import React from "react";

const SkeletonCard = () => {
  return (
    <div class="flex w-full items-center justify-center">
      <div class="w-full px-5">
        <div class="max-w-full w-sm rounded overflow-hidden shadow-lg animate-pulse">
          <div class="h-48 bg-gray-300"></div>
          <div class="px-6 py-4">
            <div class="h-4 bg-gray-300 mb-2 w-2/3"></div>
            <div class="h-6 bg-gray-300 "></div>
          </div>
          <div class="px-6 pt-2 pb-2">
            <div class="h-4 bg-gray-300 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
