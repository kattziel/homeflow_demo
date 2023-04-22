import styles from "./TaskIcon.css";
import React from "react";

const TaskIcon = ({ text, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>Hello</div>
      <div className={styles.titleContainer}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TaskIcon;
