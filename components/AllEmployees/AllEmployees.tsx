import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import styles from "./AllEmployees.module.css";

const AllEmployees = ({ allEmployees }) => {
  console.log(allEmployees);

  const departments = new Set();

  let count = {};
  allEmployees.forEach((employee) => {
    const department = employee.department;
    departments.add(department);
    if (count[department] === undefined) {
      count[department] = 1;
    } else {
      ++count[department];
    }
  });

  return (
    <>
      <div className={styles.divisionTabs}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {[...departments].map((department, index) => (
                  <Nav.Item key={`nav-${department}`}>
                    {/* employees whom have a future start date do not have a department information reported */}
                    {department ? (
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
                    ) : null}
                  </Nav.Item>
                ))}
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content>
                {[...departments].map((department, index) => (
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
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
};
export default AllEmployees;
