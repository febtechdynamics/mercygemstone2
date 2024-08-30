const DetailsLoader = () => {
  return (
    <div className="flex w-full mt-10 h-50 items-center justify-center">
      <div className="w-full px-5">
        <div className="max-w-full flex flex-col md:flex-row  w-sm rounded overflow-hidden shadow-lg animate-pulse">
          <div className="w-full p-5 max-h-screen h-96">
            <div className="h-full w-full  bg-gray-300"></div>
          </div>
          <div className=" flex flex-col gap-5 h-96 mt-7 mx-auto w-full px-5 md:px-3">
            <div className="flex flex-col gap-3 w-full py-4 ">
              {/* title */}
              <div className="h-8 w-96 bg-gray-300 mb-2 "></div>
              {/* price */}
              <div className="h-6 w-32 bg-gray-300 "></div>
            </div>
            <div className="pb-2  flex flex-col gap-3">
              {/* description */}
              <div className="h-4 w-44 bg-gray-300 "></div>
              <div className="h-16 w-full bg-gray-300 "></div>
            </div>
            <div className="pb-2 pr-5 flex flex-col gap-3">
              {/* button */}
              <div className="h-10 w-52 rounded-full bg-gray-300 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsLoader;
