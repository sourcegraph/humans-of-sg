interface ExploreProps {
  employeeLocations: { [key: string]: any };
}

//make an object named countrylist
//for each array entry, save name and country to a variable
//push the country to the countrylist object as a key
//if country does not exist, add it as a key
//if that country exists, add the employee as an item in an array

const Explore = ({ employeeLocations }: ExploreProps) => {
  // console.log(employeeLocations);

  // const countryList = {};
  // employeeLocations.map((employee) => {
  //   let employeeName = employee.firstName;
  //   let country = employee.country;
  //   const namesToACountry = countryList[country] || [];
  //   countryList[country] = [...namesToACountry, employeeName];
  // });

  // console.log(countryList);

  // const countries = Object.keys(countryList).forEach((country) => {
  //   console.log(country);
  //   <div>{country}</div>;
  // });

  return <div>hi coming soon</div>;
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
