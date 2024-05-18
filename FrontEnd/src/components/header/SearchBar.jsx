const SearchBar = () => {
  return (
    <div className="max-w-md mx-auto">
      <div className="relative flex items-center w-full h-12 rounded-l-lg focus-within:shadow-lg  bg-transparent overflow-hidden">
        <input
          className="peer h-full w-full outline-none rounded-full bg-transparent text-sm text-white pr-2"
          type="text"
          id="search"
          placeholder="Search Product ..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
