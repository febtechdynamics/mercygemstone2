import React from "react";
import "./searchBar.css";
import { Link } from "react-router-dom";

const SearchBarResults = ({ results, toggleSearchVisibility }) => {
  console.log(results);
  const resultsClassName =
    results.length > 0
      ? "search_results"
      : "search_results search_results_hidden";

  return (
    <div className={resultsClassName}>
      {results.map((result) => {
        return (
          <Link
            className="hover:text-yellow-700"
            to={`/products/${result._id}`}
            onClick={toggleSearchVisibility}
          >
            <div key={result._id}>{result.productName}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchBarResults;
