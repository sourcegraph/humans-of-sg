import { useState } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const Search = ({ allEmployees, setActiveSearch }) => {
  // console.log(allEmployees);

  const [query, setQuery] = useState("");

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

      <div className="tabPane">
        {allEmployees
          .filter((employee) => {
            if (query === "") {
              return;
            } else if (employee.displayName.toLowerCase().includes(query)) {
              console.log(employee);
              return employee;
            }
          })
          .map((employee, index) => (
            <EmployeeCard employee={employee} />
          ))}
      </div>
    </>
  );
};

export default Search;
