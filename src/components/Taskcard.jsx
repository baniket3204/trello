import React, { useState } from 'react'
import { createTask} from '../helper/additional';


export const Taskcard = ({setShowcard}) => {

  
const[state , setState] = useState("backlog");
const[department , setDepartment] = useState("engineering");
const[task , setTask] = useState("");
const[subtask , setSubtask] = useState("");
const[assingee , setAssingee] = useState("arpit");
const[taskdescription , setTaskdescription] = useState("");


const handleSubmit =(e)=>{
  e.preventDefault();
  setShowcard(false);
  createTask({
  state : state ,
  department : department ,
  task:task ,
  subtask :subtask ,
  assingee : assingee ,
  taskdescription : taskdescription
 }) 
}
  return (
    <form onSubmit={handleSubmit} className='taskform'>
      <div className='taskcard'>
         <h1>Add your task here</h1>
         <div className='input-field'>
         <h3>Select the state of the task</h3>
         <select onChange = {(e) => setState(e.target.value)} className='file-upload'>
              <option value="backlog">Backlog</option>
              <option value="ready">Ready</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
         </select>
         </div> 
         <div className='input-field'>
         <h3>Select the Department</h3>
         <select onChange = {(e) => setDepartment(e.target.value)} className='file-upload'>
              <option value="engineering">Engineering</option>
              <option value="research">Research</option>
              <option value="desing">Desing</option>
              <option value="data science">Data Science</option>
         </select>
         </div>
         <div className='task-input'>
          <textarea className='task-input-field' placeholder='Write your task' value={task} onChange = {(e) => setTask(e.target.value)}></textarea>
          <textarea className='task-input-field' placeholder='Write your task description' value={taskdescription} onChange = {(e) => setTaskdescription(e.target.value)}></textarea>
          <textarea className='task-input-field' placeholder='Write your sub task' value = {subtask} onChange = {(e) => setSubtask(e.target.value)}></textarea>
         </div>
         <div className='input-field'>
         <h3>Select Assingee</h3>
         <select onChange = {(e) => setAssingee(e.target.value)} className='file-upload'>
              <option value="arpit">Arpit</option>
              <option value="zee">Zee</option>
              <option value="rohan">Rohan</option>
         </select>
         </div>
         <div className='input-field'>
         <h3>Select the image to insert</h3>
         <label className='file-upload'>
          <span>Upload</span>
         <input type="file" accept="image/jpeg, image/png, image/jpg" style={{display: 'none'}}></input>
         </label>
         </div>
         <div style={{display: 'flex', justifyContent: 'center'}}>
          <button className='file-upload'>Add task</button>
         </div>
      </div>     
    </form>
  )
}
