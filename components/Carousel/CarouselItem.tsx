import EmployeeCard from "../EmployeeCard/EmployeeCard";
import styles from "../Carousel/CarouselItem.module.css";

const CarouselItem = ({ key, level, employee }) => {
  if (employee !== undefined) {
    return (
      <div className={styles.item + " " + styles["level" + level]}>
        {/* <EmployeeCard key={key} employee={employee} /> */}
        <div>{employee.displayName}</div>
      </div>
    );
  }
  return null;
};

export default CarouselItem;
