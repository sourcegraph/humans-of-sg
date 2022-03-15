interface ExploreProps {
  employeeLocations: { [key: string]: any };
}

const Explore = ({ employeeLocations }: ExploreProps) => {
  console.log(employeeLocations);

  //   const countries = employeeLocations.map((employee) => {
  //     const country = employee.country;
  //     const test = new Set(country);
  //     return <div>{test}</div>;
  //   });
  //   return <div>{countries}</div>;
  // };

  return <div>Coming soon</div>;
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
