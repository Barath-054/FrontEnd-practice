import React, { useEffect, useState } from 'react'
import TaskForm from './component/TaskForm'
import TaskList from './component/TaskList'
import ProgressTracker from './component/ProgressTracker'

export default function App() {
  const [tasks, setTasks] = useState([]);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
})

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  
  return (
    <div>
      <header>
        <h1>TaskBuddy</h1>
        <p>Your friendly Task Manager</p>
      </header>
      <TaskForm addTask = {addTask}/>
      <TaskList />
      <ProgressTracker />
      <button >Clear All!</button>
    </div>
  )
}
