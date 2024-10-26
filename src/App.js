import React, { useState } from "react";
import AddTask from "./components/AddTask";
import PendingTasks from "./components/PendingTasks";
import CompletedTasks from "./components/CompletedTasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      dateAdded: new Date().toLocaleString(),
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    const taskToComplete = tasks.find(task => task.id === id);
    setTasks(tasks.filter(task => task.id !== id));
    setCompletedTasks([...completedTasks, taskToComplete]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <h2>To-Do List Web App</h2>
      <AddTask addTask={addTask} />
      <PendingTasks tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
      <CompletedTasks tasks={completedTasks} />
    </div>
  );
}

export default App;

