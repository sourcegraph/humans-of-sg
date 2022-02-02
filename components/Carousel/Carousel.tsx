import React from "react";
import CarouselItem from "./CarouselItem";
import styles from "../Carousel/Carousel.module.css";
import { TransitionGroup } from "react-transition-group";

const Carousel = ({ activeNewHires }) => {
  const [active, setActive] = React.useState(0);
  const [direction, setDirection] = React.useState("");

  const leftClick = React.useCallback(() => {
    let newActive = active;
    newActive--;
    setActive(newActive < 0 ? activeNewHires.length - 1 : newActive);
    setDirection("left");
  }, []);

  const rightClick = React.useCallback(() => {
    let newActive = active;
    setActive((newActive + 1) % activeNewHires.length);
    setDirection("right");
  }, []);

  const generateItems = () => {
    let generatedItems = [];
    let level;
    for (let i = active - 2; i < active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = activeNewHires.length + i;
      } else if (i >= activeNewHires.length) {
        index = i % activeNewHires.length;
      }
      level = active - i;
      generatedItems.push(
        <CarouselItem
          key={index}
          employee={activeNewHires[index]}
          level={level}
        />,
        // <span className={styles.test}>test</span>,
      );
    }

    return generatedItems;
  };

  return (
    <div className={styles.noselect + " " + styles.carousel}>
      <div className={styles.arrow} onClick={leftClick}>
        &larr;
      </div>

      <div className={styles.test}>
        <TransitionGroup transitionName={direction}>
          {generateItems()}
        </TransitionGroup>
      </div>

      <div
        className={styles.arrow + " " + styles.arrowRight}
        onClick={rightClick}
      >
        &rarr;
      </div>
    </div>
  );
};

export default Carousel;
