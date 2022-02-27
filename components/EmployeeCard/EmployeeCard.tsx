import styles from "./EmployeeCard.module.css";
import React from "react";
import Modal from "../Modal/Modal";

interface EmployeeCardProps {
  employee: { [key: string]: any };
}

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  const [modal, setModal] = React.useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.photoContainer}>
        <img src={employee.photoUrl} className={styles.photo} />
      </div>
      <div className={styles.employeeInfo}>
        <div className={styles.name}>
          {employee.preferredName ? (
            <a className={styles.employeeName} onClick={() => setModal(true)}>
              {employee.preferredName + " " + employee.lastName}
            </a>
          ) : (
            <a className={styles.employeeName} onClick={() => setModal(true)}>
              {employee.firstName + " " + employee.lastName}
            </a>
          )}
        </div>
        <div className={styles.jobDetails}>
          {/* <p>{employee.department}</p>
          <p>{employee.division}</p> */}
          <p>{employee.jobTitle}</p>
        </div>
      </div>
      {modal && <Modal setModal={setModal} employee={employee} />}
    </div>
  );
};

export default EmployeeCard;
