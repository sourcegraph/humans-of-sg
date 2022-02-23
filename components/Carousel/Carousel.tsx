import React from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import { TransitionGroup } from "react-transition-group";
import styles from "../Carousel/Carousel.module.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const Carousel = ({ activeNewHires }) => {
  const [leftMostIndex, setLeftMostIndex] = React.useState(
    activeNewHires.length - 2,
  );
  const [rightMostIndex, setRightMostIndex] = React.useState(2);
  const [direction, setDirection] = React.useState("");

  const visibleNewHires =
    leftMostIndex > rightMostIndex
      ? activeNewHires
          .slice(leftMostIndex, activeNewHires.length)
          .concat(activeNewHires.slice(0, rightMostIndex + 1))
      : activeNewHires.slice(leftMostIndex, rightMostIndex + 1);

  const leftClick = React.useCallback(() => {
    setLeftMostIndex(
      leftMostIndex === 0 ? activeNewHires.length - 1 : leftMostIndex - 1,
    );
    setRightMostIndex(
      rightMostIndex === 0 ? activeNewHires.length - 1 : rightMostIndex - 1,
    );
    setDirection("left");
  }, [activeNewHires.length, leftMostIndex]);

  const rightClick = React.useCallback(() => {
    setLeftMostIndex(
      leftMostIndex === activeNewHires.length - 1 ? 0 : leftMostIndex + 1,
    );

    setRightMostIndex(
      rightMostIndex === activeNewHires.length - 1 ? 0 : rightMostIndex + 1,
    );

    setDirection("right");
  }, [activeNewHires.length, rightMostIndex]);

  const carouselItems = visibleNewHires.map((newHire, index) => {
    return <CarouselItem key={index} employee={newHire} level={index - 2} />;
  });

  if (activeNewHires.length >= 5) {
    return (
      <>
        <h2 className={styles.carouselHeader}>
          Weclome to our {activeNewHires.length} recent new hires!
        </h2>
        <div className={styles.carouselContainer}>
          <div className={styles.arrow} onClick={leftClick}>
            &larr;
          </div>

          <div className={styles.carousel}>
            <TransitionGroup
              className={styles.carouselItems}
              transitionname={direction}
            >
              {carouselItems}
            </TransitionGroup>
          </div>

          <div className={styles.arrow} onClick={rightClick}>
            &rarr;
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className={styles.carouselContainer}>
        {activeNewHires.map((employee) => {
          return <EmployeeCard employee={employee} />;
        })}
      </div>
    );
  }
};

export default Carousel;
