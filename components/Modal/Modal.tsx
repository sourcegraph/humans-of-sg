import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ modal, setModal, employee }) => {
  function onClose() {
    setModal(false);
  }

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>{employee.displayName}</h4>
        </div>
        <div className={styles.modalBody}>
          <div className="leftSide">
            <div className="employeePhoto">
              <img src={employee.photoUrl} />
            </div>
            <div className="employeeLinks"></div>
          </div>
          <div className="rightSide">
            <div className="employeeInfo">
              <p> {employee.displayName}</p>
              <p> {employee.department}</p>
              <p> {employee.jobTitle}</p>
            </div>
            <div className="employeeBio"></div>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.button} onClick={() => onClose()}>
            close
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
