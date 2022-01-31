// import Item
import React from "react";

import Test2 from "./Test2";
import styles from "../Test/Test.module.css";
import ReactCSSTransitionGroup from "react-transition-group";

const Test = ({ activeNewHires }) => {
  // let ReactCSSTransitionGroup = React.CSSTransitionGroup;

  const [items, setItems] = React.useState(activeNewHires);
  const [active, setActive] = React.useState(0);
  const [direction, setDirection] = React.useState("");

  const rightClick = React.useCallback(() => {
    let newActive = active;
    setActive((newActive + 1) % items.length);
    setDirection("right");
  }, []);

  const leftClick = React.useCallback(() => {
    let newActive = active;
    newActive--;
    setActive(newActive < 0 ? items.length - 1 : newActive);
    setDirection("left");
  }, []);

  const generateItems = () => {
    var generatedItems = [];
    var level;
    console.log(active);
    for (var i = active - 2; i < active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = generatedItems.length + i;
      } else if (i >= generatedItems.length) {
        index = i % generatedItems.length;
      }
      level = active - i;
      generatedItems.push(
        <Test2 key={index} employee={generatedItems[index]} level={level} />,
      );
    }
    return generatedItems;
  };

  return (
    <div id="carousel" className={styles.noselect}>
      <div className={styles.arrowleft} onClick={leftClick}>
        <i className={styles.fileft}></i>
      </div>
      <ReactCSSTransitionGroup transitionName={direction}>
        {generateItems()}
      </ReactCSSTransitionGroup>
      <div onClick={rightClick}>
        <i></i>
      </div>
    </div>
  );
};

export default Test;
