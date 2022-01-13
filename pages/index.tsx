import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import EmployeeCard from "../components/EmployeeCard/EmployeeCard";
import Image from "next/image";
import logo from "../assets/sg_logo.png";

const Home = ({ customReport }) => {
  console.log(customReport);

  if (!customReport) {
    return <h4>Theres nothing to show right now</h4>;
  }

  const employeesByHireDate = customReport.employees.sort(function (
    employee1,
    employee2,
  ) {
    return new Date(employee1.hireDate) - new Date(employee2.hireDate);
  });
  const customReportData = employeesByHireDate.map((employee, index) => {
    return <EmployeeCard employee={employee} />;
  });

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
      <div className={styles.allEmployees}>{customReportData}</div>
    </>
  );
};

export async function getServerSideProps() {
  const options = {
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
      ],
    }),
  };

  const customReport = await fetch(
    "https://api.bamboohr.com/api/gateway.php/sourcegraph/v1/reports/custom?format=JSON",
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return {
    props: {
      customReport,
    },
  };
}

export default Home;
