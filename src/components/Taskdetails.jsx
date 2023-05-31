import React from 'react'

export const Taskdetails = ({task}) => {
  return (
    <div>
        <h1>{task.task}</h1>
        <h3>Assingee :  <img className='avatar-img'  src={localStorage.getItem("profilepic")}></img> {task.assingee}</h3>
        <h3>Stage : {task.state}</h3>
        <h4>Description : {task.taskdescription}</h4>
    </div>
  )
}
