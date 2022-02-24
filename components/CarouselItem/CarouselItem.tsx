import EmployeeCard from "../EmployeeCard/EmployeeCard";
import styles from "../CarouselItem/CarouselItem.module.css";

interface CarouselItemProps {
  level: number;
  employee: { [key: string]: any };
}

const CarouselItem = ({ level, employee }: CarouselItemProps) => {
  if (employee !== undefined) {
    return (
      <div className={styles.item + " " + styles["level" + level]}>
        {/* <EmployeeCard employee={employee} /> */}
        <div className={styles.test}>{employee.firstName}</div>
      </div>
    );
  }
  return null;
};

export default CarouselItem;
