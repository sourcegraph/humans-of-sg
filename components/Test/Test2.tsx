import EmployeeCard from "../EmployeeCard/EmployeeCard";

const Test2 = ({ key, level, employee }) => {
  if (employee !== undefined) {
    return (
      <div className={"item level" + level}>
        <EmployeeCard key={key} employee={employee} />
        {/* <div>{employee.displayName}</div> */}
      </div>
    );
  }
  return null;
};

// var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ReactDOM.render(
//   <Carousel items={items} active={0} />,
//   document.getElementById("app"),
// );

export default Test2;
