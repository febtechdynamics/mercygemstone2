import SingleCarousel from "../SingleCarosel/SingleCarosel";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ id, productImage, productName, productCategory }) => {
  return (
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
      <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style={{
          transform: "scale(1.5)",
          opacity: 0.1,
        }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="relative pt-10 px-10 w-full flex items-center justify-center">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: "radial-gradient(black, transparent 60%)",
            transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: 0.2,
          }}
        ></div>
        <SingleCarousel images={productImage} />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 text-left text-sm -mb-1">
          {productCategory}
        </span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">{productName}</span>
        </div>
        <Link
          to={`/products/${id}`}
          className="block hover:text-gray-700 bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 mt-3 leading-none text-center items-center"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  productImage: PropTypes.string,
  productName: PropTypes.string,
  productCategory: PropTypes.string,
};

export default ProductCard;
