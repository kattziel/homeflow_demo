import styles from "./TasksCategories.module.css";
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
        <TaskIcon imgSrc="https://static.vecteezy.com/system/resources/previews/006/689/880/original/bathroom-icon-illustration-free-vector.jpg" title="Bathroom"/>
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
