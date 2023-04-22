import styles from "./TasksCategories.css";
import React from "react";
import TaskIcon from "./TaskIcon";

const TasksCategories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headersContainer}>
        <h1 className={styles.header1}>Choose task categories</h1>
        <h2 className={styles.header2}>
          Select at least one to continue. You can edit these categories or add
          more later.
        </h2>
      </div>
      <div className={styles.tasksContainer}>
        <TaskIcon />
        <TaskIcon />
        <TaskIcon />
        <TaskIcon />
        <TaskIcon />
        <TaskIcon />
        <TaskIcon />
        <TaskIcon />
        <TaskIcon />
      </div>
      <div className={styles.buttonContainer}></div>
    </div>
  );
};

export default TasksCategories;
