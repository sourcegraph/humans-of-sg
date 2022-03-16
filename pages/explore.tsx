interface ExploreProps {
  employeeLocations: { [key: string]: any };
}

const Explore = ({ employeeLocations }: ExploreProps) => {
  console.log(employeeLocations);

  // let test = new Set();

  // const countries = employeeLocations.forEach((employee) => {
  //   const country = employee.country;
  //   test.add(country);
  // });

  // const test2 = Array.from(test).sort();

  // const test3 = test2.map((country) => {
  //   return <div>{country}</div>;
  // });

  // return <div>{test3}</div>;
  return <div>coming soon</div>;
};

export async function getServerSideProps() {
  const locationOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.API_KEY}`,
    },
    body: JSON.stringify({
      fields: [
        "firstName",
        "preferredName",
        "lastName",
        "photoUploaded",
        "photoUrl",
        "country",
        "status",
      ],
    }),
  };
  const employeeLocations = await fetch(
    "https://api.bamboohr.com/api/gateway.php/sourcegraph/v1/reports/custom?format=JSON",
    locationOptions,
  )
    .then((response) => response.json())
    .then((data) =>
      data.employees.filter(
        (employee: { [key: string]: any }) => employee.status != "Inactive",
      ),
    )
    .catch((err) => console.error(err));

  return {
    props: {
      employeeLocations,
    },
  };
}

export default Explore;
