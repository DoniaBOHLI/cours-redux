import { useEffect, useState } from "react";
import { tasks$ } from "./rxjs";
import { map } from "rxjs";

const TasksHeader = () => {
   const tasks = useTasks();

   const undoneTasks = tasks.filter((t) => t.done === false).length;
 
 return (
    <header>
      <h1>React Todo List</h1>
      <p>
        Tâches à faire : <strong>{undoneTasks}</strong>
      </p>
    </header>
  );
};

export default TasksHeader;
