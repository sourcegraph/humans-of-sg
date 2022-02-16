import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import styles from "./AllEmployees.module.css";
import { NavDropdown } from "react-bootstrap";

const AllEmployees = ({ allEmployees }) => {
  console.log(allEmployees);

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

  return (
    <>
      <div className={styles.divisionTabs}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {Object.keys(departments).map((department, index) => {
                  const divisions = departments[department];
                  const uniqueDivisions = Array.from(new Set(divisions));
                  console.log(department, uniqueDivisions);

                  if (uniqueDivisions.length > 1) {
                    return (
                      <NavDropdown
                        title="Dropdown"
                        id="offcanvasNavbarDropdown"
                      >
                        {uniqueDivisions.map((division) => {
                          console.log(division);
                          return (
                            <NavDropdown.Item key={division} href="#action3">
                              {division}
                            </NavDropdown.Item>
                          );
                        })}
                      </NavDropdown>
                    );
                  } else {
                    return (
                      <Nav.Item key={`nav-${department}`}>
                        <Nav.Link
                          className={styles.navLink}
                          key={`event-${index}`}
                          eventKey={`event-${index}`}
                        >
                          {
                            <span className={styles.departmentCount}>
                              {department}
                            </span>
                          }
                          {
                            <span className={styles.departmentCount}>
                              {count[department]}
                            </span>
                          }
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
                        eventKey={`event-${index}`}
                        className={styles.tabPane}
                      >
                        <div className={styles.tabPane}>
                          {allEmployees
                            .filter(
                              (employee) =>
                                employee.department?.split("-")[0] ===
                                  department?.split("-")[0] &&
                                employee.status != "Inactive",
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
