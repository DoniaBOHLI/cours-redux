import { useEffect, useState } from "react";
import { tasks$, useTasks } from "./rxjs";
import TaskItem from "./TaskItem";

const TasksList = () => {
  const tasks = useTasks();
  
  return (
     <>
      {tasks.map((t) => (
        <TaskItem task={t} key={t.id} />
      ))}
    </>
  );
};

export default TasksList;
