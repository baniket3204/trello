import React, { useState } from 'react'
import { Login } from './Login'
import { Navbar } from '../components/Navbar';
import { AiOutlinePlus } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { Taskcard } from '../components/Taskcard';
import { getItems } from '../helper/additional';
import Card from '../components/Card';
import { Taskdetails } from '../components/Taskdetails';



export const Dashboard = () => {
  const userName = localStorage.getItem("name");
  const doneTasks = getItems({
    state : "done" ,
    tasks : "tasks"
  })
  const inprogressTasks = getItems({
    state : "in-progress" ,
    tasks : "tasks"
  })
  const backlogTasks = getItems({
    state : "backlog" ,
    tasks : "tasks"
  })
  const readyTasks = getItems({
    state : "ready" ,
    tasks : "tasks"
  })
  
  const [showdetails , setShowdetails] = useState(false);
  const handleCard = e =>{
    setShowdetails(true)
  }

  return (
    <> {!userName ?( <Login/>) : (
      <>
      <Navbar />
     
     <div className='dash'>
            <div className='back-log'>
                 <h3>Backlog</h3>
                     <AiOutlinePlus />
                     <BsThreeDots />
                     {
                      backlogTasks.map((item) => 
                       <Card item = {item} onClick = {handleCard}/>
                      )
                     }
                  
            </div>  

            <div className='ready'>
              <h3>Ready</h3>
              <AiOutlinePlus />
              <BsThreeDots />
              {
                      readyTasks.map((item) => 
                      <Card item = {item} onClick = {handleCard}/>
                      )
              }
            </div>

            <div className='in-progress'>
               <h3>In Progress</h3>
               <AiOutlinePlus />
               <BsThreeDots />
               {
                      inprogressTasks.map((item) => 
                      <Card item = {item} onClick = {handleCard}/>
                      )
                     }
            </div>
       
           <div className='done'>
             <h3>Done</h3>
             <AiOutlinePlus />
             <BsThreeDots />
             {
                      doneTasks.map((item) => 
                      <Card item = {item} onClick = {handleCard}/>
                      )
                     }
           </div>
     </div>
     <Taskcard/>
     {
      showdetails && <Taskdetails/>
     }
     </>
    )}
    
    </>
    
  )
}
