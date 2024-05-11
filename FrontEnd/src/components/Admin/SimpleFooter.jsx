import { Link } from "react-router-dom";
import logo from "../../../public/images/logo.png";

const SimpleFooter = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
        <div>
          <Link
            className="flex-none text-xl font-semibold text-black dark:text-white"
            to="/"
            aria-label="Brand"
          >
            <img className="h-10 w-10" src={logo} alt="" />
          </Link>
        </div>

        <ul className="text-center">
          <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
            <Link
              className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
            <Link
              className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200"
              to="/"
            >
              Services
            </Link>
          </li>
          <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
            <Link
              className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* <!-- Social Brands --> */}
        <div className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200">
          <p>Mercygems, All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
