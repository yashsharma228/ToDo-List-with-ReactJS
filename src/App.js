import React, { useState, useEffect } from "react";

import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import todoIcon from "./assets/direct.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="High Priority"
          icon={todoIcon}
          tasks={tasks}
          status="High"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Medium Priority"
          icon={doingIcon}
          tasks={tasks}
          status="Medium"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Low Priority"
          icon={doneIcon}
          tasks={tasks}
          status="Low"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
