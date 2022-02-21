import { useState } from "react";

const Search = ({ allEmployees, setActiveSearch }) => {
  const [query, setQuery] = useState(null);

  const handleSearchInput = (event) => {
    setQuery(event.target.value);
    setActiveSearch(true);

    if (event.target.value === "") {
      setActiveSearch(false);
    }
  };

  return (
    <>
      <h1>Search</h1>
      <div>
        <input placeholder="Search" onChange={handleSearchInput} />
      </div>
    </>
  );
};

export default Search;
