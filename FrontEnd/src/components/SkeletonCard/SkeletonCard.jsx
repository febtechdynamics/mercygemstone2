const SkeletonCard = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full px-5">
        <div className="max-w-full w-sm rounded overflow-hidden shadow-lg animate-pulse">
          <div className="h-48 bg-gray-300"></div>
          <div className="px-6 py-4">
            <div className="h-4 bg-gray-300 mb-2 w-2/3"></div>
            <div className="h-6 bg-gray-300 "></div>
          </div>
          <div className="px-6 pt-2 pb-2">
            <div className="h-4 bg-gray-300 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
