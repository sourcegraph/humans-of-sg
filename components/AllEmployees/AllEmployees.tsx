import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import styles from "./AllEmployees.module.css";
import { NavDropdown } from "react-bootstrap";
import { useState } from "react";

const AllEmployees = ({ allEmployees }: { [key: string]: any }) => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const departments: { [department: string]: any } = {};
  let count: { [department: string]: any } = {};

  allEmployees.forEach((employee: { [key: string]: any }) => {
    const department: string = employee.department;
    const division: string = employee.division;
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

  const handleDivisionClick = (department: string, division: string) => {
    setSelectedDepartment(department);
    setSelectedDivision(division);
  };

  return (
    <>
      <h2 className={styles.allEmployeesHeader}>The Humans of Sourcegraph</h2>
      <div className={styles.divisionTabs}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {Object.keys(departments).map((department, index) => {
                  const divisions: string[] = departments[department];
                  const uniqueDivisions = Array.from(new Set(divisions)).sort();
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
                        id="offcanvasNavbarDropdown"
                        bsPrefix={
                          department === selectedDepartment
                            ? "show nav-link" + " " + styles.override
                            : "inactive nav-link" + " " + styles.override
                        }
                        // onClick={() => handleDivisionClick(department, "")}
                        onClick={() => setSelectedDepartment(department)}
                      >
                        {uniqueDivisions.map((division) => {
                          return (
                            <NavDropdown.Item
                              key={`event-${division}-${index}`}
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
                })}

                <Nav.Item onClick={() => handleDivisionClick("", "")}>
                  <Nav.Link className={styles.navLink} eventKey={`event-All`}>
                    All ({allEmployees.length})
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9}>
              {/* {selectedDivision || selectedDepartment ? null : (
                <div className={styles.tabPane}>
                  {allEmployees.map((employee: { [key: string]: any }) => (
                    <EmployeeCard employee={employee} key={employee.id} />
                  ))}
                </div>
              )}

              {selectedDepartment && !selectedDivision ? (
                <div className={styles.tabPane}>
                  {allEmployees
                    .filter(
                      (employee: { [key: string]: any }) =>
                        employee.department === selectedDepartment,
                    )
                    .map((employee: { [key: string]: any }) => (
                      <EmployeeCard employee={employee} key={employee.id} />
                    ))}
                </div>
              ) : null} */}

              {selectedDivision ? null : (
                <div className={styles.tabPane}>
                  {allEmployees.map((employee: { [key: string]: any }) => (
                    <EmployeeCard employee={employee} key={employee.id} />
                  ))}
                </div>
              )}

              <Tab.Content>
                {Object.keys(departments).map((department, index) => {
                  return (
                    <>
                      <Tab.Pane
                        key={`pane-${index}`}
                        eventKey={`event-${department}-${selectedDivision}`}
                      >
                        <div className={styles.tabPane}>
                          {allEmployees
                            .filter(
                              (employee: { [key: string]: any }) =>
                                employee.division === selectedDivision &&
                                employee.department === selectedDepartment,
                            )
                            .map((employee: { [key: string]: any }) => (
                              <EmployeeCard
                                employee={employee}
                                key={employee.id}
                              />
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
