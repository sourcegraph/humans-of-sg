import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import EmployeeCard from "../components/EmployeeCard/EmployeeCard";

const Home = ({ data }) => {
  console.log({ data });

  if (!data) {
    return <h4>Theres nothing to show right now</h4>;
  }

  let employeeData = data.employees.map((employee, index) => {
    return <EmployeeCard employee={employee} />;
  });

  return (
    <>
      <Head>
        <title>Humans of Sourcegraph</title>
        <link rel="icon" href="/icon-32.png" />
      </Head>

      <Navbar />
      <div>
        <h1>Sourcegraph </h1>
        <h3>Humans of Sourcegraph</h3>
        <h4>Familiarize yourself with our teammates and organization.</h4>
      </div>
      <div className={styles.allEmployees}>{employeeData}</div>
    </>
  );
};

export async function getServerSideProps() {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${process.env.API_KEY}`,
      "Access-Control-Allow-Origin": "*",
    },
  };

  const data = await fetch(
    "https://api.bamboohr.com/api/gateway.php/sourcegraph/v1/employees/directory",
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return {
    props: {
      data,
    },
  };
}

export default Home;
