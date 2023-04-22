import styles from "./TaskIcon.module.css";
import React from "react";

const TaskIcon = ({imgSrc, title}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={imgSrc} alt={title}/>
      </div>
      <div className={styles.titleContainer}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default TaskIcon;
