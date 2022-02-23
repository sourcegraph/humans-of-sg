import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import styles from "./AllEmployees.module.css";
import { NavDropdown } from "react-bootstrap";
import { useState } from "react";

const AllEmployees = ({ allEmployees }) => {
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const departments = {};
  let count = {};

  allEmployees.forEach((employee) => {
    const department = employee.department;
    const division = employee.division;
    if (!department) {
      return;
    }
    if (count[department] === undefined) {
      count[department] = 1;
    } else {
      ++count[department];
    }
    const existingDivisions = departments[department] || [];
    departments[department] = [...existingDivisions, division];
  });

  const handleDivisionClick = (department, division) => {
    setSelectedDepartment(department);
    setSelectedDivision(division);
  };

  return (
    <>
      <h2 className={styles.allEmployeesHeader}>Our Organization</h2>
      <div className={styles.divisionTabs}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {Object.keys(departments).map((department, index) => {
                  const divisions = departments[department];
                  const uniqueDivisions = Array.from(new Set(divisions)).sort();
                  if (uniqueDivisions.length > 1) {
                    return (
                      <>
                        <NavDropdown
                          title={
                            department +
                            "                  " +
                            "(" +
                            count[department] +
                            ")"
                          }
                          className={
                            department === selectedDepartment
                              ? "show"
                              : "inactive"
                          }
                          id="offcanvasNavbarDropdown"
                        >
                          {uniqueDivisions.map((division) => {
                            return (
                              <NavDropdown.Item
                                key={`event-${division}-${index}`}
                                // href={division}
                                eventKey={`event-${department}-${division}`}
                                onClick={() =>
                                  handleDivisionClick(department, division)
                                }
                              >
                                {division}
                              </NavDropdown.Item>
                            );
                          })}
                        </NavDropdown>
                      </>
                    );
                  } else {
                    return (
                      <Nav.Item key={`nav-${department}`}>
                        <Nav.Link
                          className={styles.navLink}
                          key={`event-${index}`}
                          eventKey={`event-${department}-Support`}
                          onClick={() =>
                            handleDivisionClick(department, "Support")
                          }
                        >
                          {department +
                            "                  " +
                            "(" +
                            count[department] +
                            ")"}
                        </Nav.Link>
                      </Nav.Item>
                    );
                  }
                })}
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content>
                {Object.keys(departments).map((department, index) => {
                  return (
                    <>
                      <Tab.Pane
                        key={`pane-${index}`}
                        eventKey={`event-${department}-${selectedDivision}`}
                        className={styles.tabPane}
                      >
                        <div className={styles.tabPane}>
                          {allEmployees
                            .filter(
                              (employee) =>
                                employee.division === selectedDivision &&
                                employee.department === selectedDepartment,
                              // employee.status != "Inactive",
                            )
                            .map((employee) => (
                              <EmployeeCard employee={employee} />
                            ))}
                        </div>
                      </Tab.Pane>
                    </>
                  );
                })}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
};
export default AllEmployees;
