import { useState } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import styles from "./Search.module.css";

interface SearchProps {
  allEmployees: { [key: string]: any };
  setActiveSearch: (activeSearch: boolean) => void;
}

const Search = ({ allEmployees, setActiveSearch }: SearchProps) => {
  const [query, setQuery] = useState("");

  const handleSearchInput = (event: any) => {
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
          placeholder="Search"
          onChange={handleSearchInput}
        />
      </div>

      <div className={styles.tabPane}>
        {allEmployees
          .filter((employee: { [key: string]: any }) => {
            if (query === "") {
              return;
            } else if (
              employee.displayName.toLowerCase().includes(query.toLowerCase())
            ) {
              return employee;
            }
          })
          .map((employee: { [key: string]: any }, index: number) => (
            <EmployeeCard employee={employee} key={employee.id} />
          ))}
      </div>
    </>
  );
};

export default Search;
