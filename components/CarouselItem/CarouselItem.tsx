import styles from "../CarouselItem/CarouselItem.module.css";

interface CarouselItemProps {
  level: number;
  employee: { [key: string]: any };
}

const CarouselItem = ({ level, employee }: CarouselItemProps) => {
  return (
    <>
      <div className={styles.carouselCard + " " + styles["level" + level]}>
        <div className={styles.employeePhotoContainer}>
          <img src={employee.photoUrl} className={styles.employeePhoto} />
        </div>
        <div className={styles.employeeInfo}>
          <p className={styles.employeeInfoText}>
            {employee.preferredName
              ? employee.preferredName + " " + employee.lastName
              : employee.firstName + " " + employee.lastName}
            {employee.customPronouns
              ? "," + " " + employee.customPronouns
              : null}
          </p>
          {employee.jobTitle ? (
            <p className={styles.employeeInfoText}>{employee.jobTitle}</p>
          ) : null}

          <p className={styles.employeeInfoText}>
            Started on: {+" " + new Date(employee.hireDate).getMonth() + 1}/
            {new Date(employee.hireDate).getDate()}
          </p>

          <p className={styles.employeeInfoText}>hashtag1, hashtag2, hastag3</p>
        </div>
      </div>
    </>
  );
};

export default CarouselItem;

// 1st
// 2nd
// 3rd
// 4 - 20th
// 21st
// 22nd
// 23rd
// 24 - 30th
// 31st
