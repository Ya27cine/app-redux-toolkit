import { useState } from "react";
import { Provider } from "react-redux";

import "./styles.css";
import TaskForm from "./components/TaskForm";
import TasksHeader from "./components/TasksHeader";
import TasksList from "./components/TasksList";
import { store } from "./redux";

export default function App() {

  const dateTody = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toISOString();
  }

  return (
      <Provider store={store}>
      <div className="container">
        <article>
          <TasksHeader />
          <TasksList
          />
          <footer>
            <TaskForm />
          </footer>
        </article>
      </div>
    </Provider>
  );
}
