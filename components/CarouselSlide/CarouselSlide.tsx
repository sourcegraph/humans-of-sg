import Carousel from "react-bootstrap/Carousel";
import styles from "../CarouselSlide/CarouselSlide.module.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const CarouselSlide = ({ activeNewHires }) => {
  console.log(activeNewHires);

  const numberOfCarouselItems = Math.ceil(activeNewHires.length / 4);
  const carouselArray = Array(numberOfCarouselItems).fill(
    "this value doesn't actually matter",
  );

  console.log(numberOfCarouselItems);

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        className={styles.newHireCarousel}
        interval={null}
        variant="dark"
      >
        {carouselArray.map((_value, index) => (
          <Carousel.Item key={`carousel-${index}`}>
            <div className={styles.newHirePage}>
              {activeNewHires
                .slice(index * 4, (index + 1) * 4)
                .map((employee) => (
                  <EmployeeCard key={employee.id} employee={employee} />
                ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSlide;
