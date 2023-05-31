import React, { useState } from 'react'
import { createTask} from '../helper/additional';


export const Taskcard = () => {

  
const[state , setState] = useState("backlog");
const[department , setDepartment] = useState("engineering");
const[task , setTask] = useState("");
const[subtask , setSubtask] = useState("");
const[assingee , setAssingee] = useState("arpit");
const[taskdescription , setTaskdescription] = useState("");


const handleSubmit =(e)=>{
  e.preventDefault();
  createTask({
  state : state ,
  department : department ,
  task:task ,
  subtask :subtask ,
 })
}
  return (
    <form onSubmit={handleSubmit}>
      <div className='taskcard'>
         <h1>Add your task here</h1>
         <h3>Select the state of the task</h3>
         <select onChange = {(e) => setState(e.target.value)}>
              <option value="backlog">Backlog</option>
              <option value="ready">Ready</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
         </select>
         <h3>Select the Department</h3>
         <select onChange = {(e) => setDepartment(e.target.value)}>
              <option value="engineering">Engineering</option>
              <option value="research">Research</option>
              <option value="desing">Desing</option>
              <option value="data science">Data Science</option>
         </select>
         <textarea placeholder='write your task' value={task} onChange = {(e) => setTask(e.target.value)}></textarea>
         <textarea placeholder='write your task description' value={taskdescription} onChange = {(e) => setTaskdescription(e.target.value)}></textarea>
         <textarea placeholder='write your sub task' value = {subtask} onChange = {(e) => setSubtask(e.target.value)}></textarea>
         <h3>Select Assingee</h3>
         <select onChange = {(e) => setAssingee(e.target.value)}>
              <option value="arpit">Arpit</option>
              <option value="zee">Zee</option>
              <option value="rohan">Rohan</option>
         </select>
         <h3>Select the image to insert</h3>
         <input type="file" accept="image/jpeg, image/png, image/jpg"></input>
          <button>Add task</button>
      </div>     
    </form>
  )
}
