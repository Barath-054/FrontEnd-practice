import React, { useState } from 'react'

export default function TaskForm(addTask) {
let [task, setTask] = useState("");
let [priority, setPriority] = useState("");
let [category, setCategory] = useState("");

const handlesubmit = () => {
  addTask({text:task, priority, category, completed:false})
}

  return (
    <div>
      <form className='task-form'>
        <div id="inp">
          <input type ="text" placeholder='Enter the task'onChange= {(e) => setTask(e.target.value)} />
          <h2>{task}</h2>
          <span>
            <button type="submit">Add task</button>
          </span>
        </div>
          <div id= "btns">
            <select onChange={(e) => setPriority(e.target.value)}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="General">General</option>
              <option value="Work">Work</option>
              <option value="Persional">Persional</option>
            </select>
          </div>
        
      </form>
    </div>
  )
}
