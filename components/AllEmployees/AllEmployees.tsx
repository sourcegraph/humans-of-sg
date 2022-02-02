import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import styles from "./AllEmployees.module.css";

const AllEmployees = ({ allEmployees }) => {
  const divisions = new Set();

  allEmployees.employees.forEach((employee) => {
    const division = employee.division?.split("-")[0];
    divisions.add(division);
  });

  return (
    <>
      <div className={styles.divisionTabs}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {[...divisions].map((division, index) => (
                  <>
                    <Nav.Item key={`nav-${index}`}>
                      <Nav.Link
                        key={`event-${index}`}
                        eventKey={`event-${index}`}
                      >
                        {division}
                      </Nav.Link>
                    </Nav.Item>
                  </>
                ))}
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content className={styles.tabContent}>
                {[...divisions].map((division, index) => (
                  <>
                    <Tab.Pane
                      key={`pane-${index}`}
                      eventKey={`event-${index}`}
                      className={styles.tabPane}
                    >
                      {allEmployees.employees
                        .filter(
                          (employee) =>
                            employee.division?.split("-")[0] ===
                              division?.split("-")[0] &&
                            employee.status === "Active",
                        )
                        .map((employee) => (
                          <EmployeeCard employee={employee} />
                        ))}
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
