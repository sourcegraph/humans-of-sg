import styles from "./EmployeeCard.module.css";
import React from "react";
import Modal from "../Modal/Modal";

const EmployeeCard = ({ employee }) => {
  const [modal, setModal] = React.useState(false);

  return (
    <div className={styles.card}>
      <div>
        <img src={employee.photoUrl} />
      </div>
      <div>
        <p className={styles.employeeName} onClick={() => setModal(true)}>
          {employee.displayName}
        </p>
        <p>{employee.department}</p>
        <p>{employee.jobTitle}</p>
      </div>
      {modal && <Modal modal={modal} setModal={setModal} employee={employee} />}
    </div>
  );
};

export default EmployeeCard;
