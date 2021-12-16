import styles from "./EmployeeCard.module.css";

const EmployeeCard = ({ employee }) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={employee.photoUrl} />
      </div>
      <div>
        <p className={styles.employeeName}>{employee.displayName}</p>
        <p>{employee.department}</p>
        <p>{employee.jobTitle}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
