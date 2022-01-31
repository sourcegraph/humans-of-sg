import EmployeeCard from "../EmployeeCard/EmployeeCard";

const Test2 = ({ level, employee }) => {
  return (
    <div className={"item level" + level}>
      <EmployeeCard key={employee.id} employee={employee} />
    </div>
  );
};

// var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ReactDOM.render(
//   <Carousel items={items} active={0} />,
//   document.getElementById("app"),
// );

export default Test2;
