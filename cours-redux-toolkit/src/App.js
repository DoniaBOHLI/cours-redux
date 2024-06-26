import { useEffect, useState } from "react";
import { addTask, deleteTask, tasks$, toggleTask } from "./rxjs";
import "./styles.css";
import TaskForm from "./TaskForm";
import TasksHeader from "./TasksHeader";
import TasksList from "./TasksList";

export default function App() {
 return (
    <div className="container">
      <article>
        <TasksHeader />
        <TasksList />
        <footer>
          <TaskForm />
        </footer>
      </article>
    </div>
  );
}
