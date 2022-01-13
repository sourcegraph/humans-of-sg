import styles from "./EmployeeCard.module.css";
import React from "react";
import Modal from "../Modal/Modal";

const EmployeeCard = ({ employee, getEmployee }) => {
  const [modal, setModal] = React.useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.photo}>
        <img src={employee.photoUrl} />
      </div>
      <div className={styles.employeeInfo}>
        <div className={styles.name}>
          <p className={styles.employeeName} onClick={() => setModal(true)}>
            {employee.displayName}
          </p>
          <p>{employee.hireDate}</p>
        </div>
        <div className={styles.jobDetails}>
          <p>{employee.department}</p>
          <p>{employee.jobTitle}</p>
        </div>
      </div>
      {modal && <Modal modal={modal} setModal={setModal} employee={employee} />}
    </div>
  );
};

export default EmployeeCard;
