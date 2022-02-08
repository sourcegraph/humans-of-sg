import React from "react";
import CarouselItem from "../Carousel/CarouselItem";
import { TransitionGroup } from "react-transition-group";
import styles from "../Carousel/Carousel.module.css";

// 10 Employees
// The first employee is always the middle of the carousel to start
// 9, 10, 0, 1, 2
// Move left:
// 8, 9, 10, 0, 1
// Move right:
// 9, 10, 0, 1, 2
// Move right:
// 10, 0, 1, 2, 3
// Move right:
// 0, 1, 2, 3, 4

const NewCarousel = ({ activeNewHires }) => {
  console.log(activeNewHires);
  // TODO: If activeNewHires.length < 5, show them in the carousel but with the buttons disabled.

  // activeNewHires is array of employees
  // We want up to 5 items visible in the carousel, with the first employee in the center
  // e.g. if there are 10 employees, the employee we show leftmost in the carousel is the 9th one
  const [leftMostIndex, setLeftMostIndex] = React.useState(
    activeNewHires.length - 2,
  );
  // e.g. if there are 10 employees, the employee we show rightmost in the carousel is the 3rd one
  const [rightMostIndex, setRightMostIndex] = React.useState(2);
  const [direction, setDirection] = React.useState("");

  const visibleNewHires =
    leftMostIndex > rightMostIndex
      ? // e.g. for 10 employees with leftmost at 9 and rightmost at 2, we want to show 9, 10, 0, 1, 2
        activeNewHires
          .slice(leftMostIndex, activeNewHires.length)
          .concat(activeNewHires.slice(0, rightMostIndex + 1))
      : // e.g. for 10 employees with leftmost at 2 and rightmost at 6, we want to show 2, 3, 4, 5, 6
        activeNewHires.slice(leftMostIndex, rightMostIndex + 1);

  console.log(visibleNewHires);

  //useCallback only about defining the function....
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
    // setRightMostIndex((rightMostIndex + 1) % activeNewHires.length);
    setRightMostIndex(rightMostIndex + 1);
    setDirection("right");
  }, [activeNewHires.length, rightMostIndex]);

  const carouselItems = visibleNewHires.map((newHire, index) => {
    return <CarouselItem key={index} employee={newHire} level={index - 2} />;
  });

  return (
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
  );
};

export default NewCarousel;
