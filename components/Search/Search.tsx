import { useState } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import styles from "./Search.module.css";

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
      <div className={styles.searchContainer}>
        <input
          className={styles.searchBar}
          placeholder="Search for Employee"
          onChange={handleSearchInput}
        />
      </div>

      <div className={styles.tabPane}>
        {allEmployees
          .filter((employee: { [key: string]: any }) => {
            if (query === "") {
              return;
            } else if (employee.displayName.toLowerCase().includes(query)) {
              return employee;
            }
          })
          .map((employee: { [key: string]: any }, index) => (
            <EmployeeCard employee={employee} />
          ))}
      </div>
    </>
  );
};

export default Search;
