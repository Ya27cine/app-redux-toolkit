import { useState } from "react";
import "./styles.css";
import TaskForm from "./components/TaskForm";
import TasksHeader from "./components/TasksHeader";
import TasksList from "./components/TasksList";

export default function App() {

  const dateTody = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toISOString();
  }

  const [tasks, setTasks] = useState([
    { id: 1, text: "Faire les courses", done: false, date: dateTody() },
    { id: 2, text: "Ménage !", done: false, date: dateTody() },
  ]);


  const addTask = (text) => {
    const newTask = {
      text,
      id: Date.now(),
      done: false,
      date: dateTody()
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  };

  const toggleTask = (id) => {
    const realTask = tasks.find((t) => t.id === id);
    const index = tasks.findIndex((t) => t.id === id);
    const taskCopy = { ...realTask };
    const tasksListCopy = [...tasks];

    taskCopy.done = !taskCopy.done;
    if (taskCopy.done) {
      taskCopy.date = dateTody()
    }
    tasksListCopy[index] = taskCopy;
    setTasks(tasksListCopy);
  };

  return (
    <div className="container">
      <article>
        <TasksHeader tasks={tasks} />
        <TasksList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
        <footer>
          <TaskForm addTask={addTask} />
        </footer>
      </article>
    </div>
  );
}
