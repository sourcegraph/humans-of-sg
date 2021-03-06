import styles from "../styles/Home.module.css";
import AllEmployees from "../components/AllEmployees/AllEmployees";
import Carousel from "../components/Carousel/Carousel";
import Search from "../components/Search/Search";
import Unauthorized from "../components/Unauthorized";
import { useSession } from "next-auth/client";
import { useState } from "react";

interface IndexProps {
  recentChangeEmployees: { [key: string]: any };
  allEmployees: { [key: string]: any };
}

const Home = ({ recentChangeEmployees, allEmployees }: IndexProps) => {
  const [session, loading] = useSession();
  const [activeSearch, setActiveSearch] = useState(false);

  if (!recentChangeEmployees) {
    return <h4>Theres nothing to show right now</h4>;
  }

  const employeesByHireDate = recentChangeEmployees.sort(function (
    employee1: { [key: string]: any },
    employee2: { [key: string]: any },
  ) {
    return (
      new Date(employee2.hireDate).getTime() -
      new Date(employee1.hireDate).getTime()
    );
  });

  const activeNewHires = employeesByHireDate.filter(
    (employee: { [key: string]: any }) =>
      employee.status != "Inactive" && new Date(employee.hireDate) < new Date(),
  );

  return (
    <>
      {session ? (
        <>
          <div>
            <Search
              allEmployees={allEmployees}
              setActiveSearch={setActiveSearch}
            />
          </div>

          <div
            className={
              activeSearch ? styles.activeSearch : styles.defaultContent
            }
          >
            <div>
              <Carousel activeNewHires={activeNewHires} />
            </div>
            <div>
              <AllEmployees allEmployees={allEmployees} />
            </div>
          </div>
        </>
      ) : (
        <div className={styles.signInContainer}>
          <Unauthorized />
        </div>
      )}
    </>
  );
};

export async function getServerSideProps() {
  let date: Date | string = new Date();
  date.setDate(date.getDate() - 30);

  //manipulating ISO string as bamboo API doesnt accept milliseconds
  let fixedDate = date.toISOString().split(".")[0] + "Z";

  const newHireOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.API_KEY}`,
    },
    body: JSON.stringify({
      filters: {
        lastChanged: {
          includeNull: "no",
          value: fixedDate,
        },
      },
      fields: [
        "firstName",
        "lastName",
        "customGitHub",
        "jobTitle",
        "workEmail",
        "department",
        // For some reason photoUrl only works if photoUploaded is also requested at the same time
        "photoUploaded",
        "photoUrl",
        "hireDate",
        "status",
        "customPronouns",
        "preferredName",
      ],
    }),
  };

  const allEmployeeOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.API_KEY}`,
    },
    body: JSON.stringify({
      fields: [
        "firstName",
        "lastName",
        "preferredName",
        "displayName",
        "customGitHub",
        "jobTitle",
        "workEmail",
        "department",
        "photoUploaded",
        "photoUrl",
        "hireDate",
        "status",
        "division",
        "customPronouns",
      ],
    }),
  };

  const recentChangeEmployees = await fetch(
    "https://api.bamboohr.com/api/gateway.php/sourcegraph/v1/reports/custom?format=JSON",
    newHireOptions,
  )
    .then((response) => response.json())
    .then((data) =>
      data.employees.filter(
        (employee: { [key: string]: any }) =>
          new Date(employee.hireDate) > date,
      ),
    )
    .catch((err) => console.error(err));

  const allEmployees: { [key: string]: any } = await fetch(
    "https://api.bamboohr.com/api/gateway.php/sourcegraph/v1/reports/custom?format=JSON",
    allEmployeeOptions,
  )
    .then((response) => response.json())
    .then((data) =>
      data.employees
        .filter(
          (employee: { [key: string]: any }) =>
            employee.status != "Inactive" &&
            new Date(employee.hireDate) < new Date(),
        )

        .sort(function (
          employee1: { [key: string]: any },
          employee2: { [key: string]: any },
        ) {
          return (
            new Date(employee2.hireDate).getTime() -
            new Date(employee1.hireDate).getTime()
          );
        }),
    )
    .catch((err) => console.error(err));

  return {
    props: {
      recentChangeEmployees,
      allEmployees,
    },
  };
}

export default Home;
