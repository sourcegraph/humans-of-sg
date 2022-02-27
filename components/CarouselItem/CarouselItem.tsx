import styles from "../CarouselItem/CarouselItem.module.css";

interface CarouselItemProps {
  level: number;
  employee: { [key: string]: any };
}

const CarouselItem = ({ level, employee }: CarouselItemProps) => {
  // if (employee !== undefined) {
  return (
    <>
      <div className={styles.carouselItem + " " + styles["level" + level]}>
        <p>{employee.name}</p>

        <div className={styles.carouselItemContent}>
          <div className={styles.employeePhotoContainer}>
            <img src={employee.photoUrl} className={styles.employeePhoto} />
          </div>
          <div className={styles.employeeInfo}>
            <span className={styles.employeeInfoText}>
              {employee.preferredName
                ? employee.preferredName + " " + employee.lastName
                : employee.firstName + " " + employee.lastName}
              {employee.customPronouns
                ? "," + " " + employee.customPronouns
                : null}
            </span>

            <br></br>
            <span className={styles.employeeInfoText}>
              {employee.department}
            </span>

            <span className={styles.employeeInfoText}>{employee.jobTitle}</span>

            <span className={styles.employeeInfoText}>
              Start Date {employee.hireDate}
            </span>

            <br></br>
            <span className={styles.employeeInfoText}>hashtags </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselItem;
