import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import EmployeeCard from "../components/EmployeeCard/EmployeeCard";
import Image from "next/image";
import logo from "../assets/sg_logo.png";
import AllEmployees from "../components/AllEmployees/AllEmployees";
import CarouselSlide from "../components/CarouselSlide/CarouselSlide";
import Test from "../components/Test/Test";

const Home = ({ customReport, allEmployees }) => {
  if (!customReport) {
    return <h4>Theres nothing to show right now</h4>;
  }

  const employeesByHireDate = customReport.sort(function (
    employee1,
    employee2,
  ) {
    return new Date(employee2.hireDate) - new Date(employee1.hireDate);
  });

  const activeNewHires = employeesByHireDate.filter(
    (employee) =>
      employee.status !== "Inactive" &&
      new Date(employee.hireDate) < new Date(),
  );

  return (
    <>
      <Head>
        <title>HoS</title>
        <link rel="icon" href="/icon-32.png" />
      </Head>
      <Navbar />
      <div className={styles.logo}>
        <Image
          className={styles.imgComponent}
          src={logo}
          alt="Sourcegraph logo"
          width={320}
          height={54}
        />
      </div>
      <div className={styles.pageDescription}>
        <p className={styles.heavyText}>Humans of Sourcegraph</p>
        <p className={styles.mutedText}>
          Familiarize yourself with our teammates and organization.
        </p>
      </div>

      {/* <CarouselSlide activeNewHires={activeNewHires} /> */}
      <Test activeNewHires={activeNewHires} active={0} />
      <AllEmployees allEmployees={allEmployees} />
    </>
  );
};

export async function getServerSideProps() {
  let date: Date | string = new Date();
  date.setDate(date.getDate() - 14);

  //manipulating ISO string as bamboo API doesnt accept milliseconds
  let fixedDate = date.toISOString().split(".")[0] + "Z";

  const options = {
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
        "displayName",
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
      ],
    }),
  };

  const options2 = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.API_KEY}`,
    },
    body: JSON.stringify({
      fields: [
        "displayName",
        "customGitHub",
        "jobTitle",
        "workEmail",
        "department",
        // For some reason photoUrl only works if photoUploaded is also requested at the same time
        "photoUploaded",
        "photoUrl",
        "hireDate",
        "status",
        "division",
        "pronouns",
      ],
    }),
  };

  const customReport = await fetch(
    "https://api.bamboohr.com/api/gateway.php/sourcegraph/v1/reports/custom?format=JSON",
    options,
  )
    .then((response) => response.json())
    .then((data) =>
      data.employees.filter((employee) => new Date(employee.hireDate) > date),
    )
    .catch((err) => console.error(err));

  const allEmployees = await fetch(
    "https://api.bamboohr.com/api/gateway.php/sourcegraph/v1/reports/custom?format=JSON",
    options2,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return {
    props: {
      customReport,
      allEmployees,
    },
  };
}

export default Home;
