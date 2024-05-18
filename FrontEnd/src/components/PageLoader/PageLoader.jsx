import { ClipLoader } from "react-spinners";

const PageLoader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <ClipLoader size={50} color="#f47e60" />
    </div>
  );
};

export default PageLoader;
