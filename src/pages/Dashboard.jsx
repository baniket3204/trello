import React, { useState } from 'react'
import { Login } from './Login'
import { Navbar } from '../components/Navbar';
import { AiOutlinePlus } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { Taskcard } from '../components/Taskcard';
import { changetaskState, fetchData, getItems } from '../helper/additional';
import Card from '../components/Card';
import { Taskdetails } from '../components/Taskdetails';
import { DragDropContext, Droppable  , Draggable} from 'react-beautiful-dnd';


export const Dashboard = () => {

  function onDragEnd(result) {
      console.log(result);
      const {destination, draggableId} = result
      changetaskState(draggableId,destination.droppableId);
      setToggle(!toggle);
    }

  const userName = localStorage.getItem("name");
  const tasks = fetchData("tasks");
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
  const [task, setTask] = useState(null);
  const [showdetails , setShowdetails] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleCard = (e, item)=>{
    console.log('curr indx', item);
    setTask(item)
    setShowdetails(true)
  }
  
  const [showcard , setShowcard] = useState(false);
  const handleTask = (e) =>{
    setShowcard(true);
  }
  
  return (
      <DragDropContext onDragEnd={onDragEnd}>
        <> {!userName ?( <Login/>) : (
      <>
      <Navbar />

      {showcard ? (<Taskcard setShowcard = {setShowcard}/>) : 
      (
      <div className='dash' >
      <div className='back-log'>
        <div className='task-title'>
           <h3>Backlog</h3>
           <div className='task-options'>
               <AiOutlinePlus onClick={() => handleTask() } id = "plus-btn" />
               <BsThreeDots />
           </div>
        </div>
        <div>
                <Droppable droppableId = 'backlog'>
                  {
                    (provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps} className='tasks'>
                          {
                            backlogTasks.map((item, index) => <Card item={item} index={index}/>)
                          }
                      </div>
                    )
                  }

                </Droppable>    
        </div>       
      </div>  

      <div className='ready'>
        <div className='task-title'>
        <h3>Ready</h3>
        <div className='task-options'>
        <AiOutlinePlus onClick={() => handleTask()}/>
        <BsThreeDots />
        </div>
        </div>
        <div >
                <Droppable droppableId = 'ready'>
                  {
                    (provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps} className='tasks'>
                          {
                            readyTasks.map((item, index) => <Card item={item} index={index}/>)
                          }
                      </div>
                    )
                  }

                </Droppable>    
        </div>
      </div>

      <div className='in-progress'>
        <div className='task-title'>
         <h3>In Progress</h3>
         <div className='task-options'>
         <AiOutlinePlus onClick={() => handleTask()}/>
         <BsThreeDots />
         </div>
        </div>
        <div >
                <Droppable droppableId = 'in-progress'>
                  {
                    (provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps} className='tasks'>
                          {
                            inprogressTasks.map((item, index) => <Card item={item} index={index}/>)
                          }
                      </div>
                    )
                  }

                </Droppable>    
        </div>
      </div>
 
     <div className='done'>
      <div className='task-title'>
       <h3>Done</h3>
       <div className='task-options'>
       <AiOutlinePlus onClick={() => handleTask()} />
       <BsThreeDots />
       </div>
        </div>
        <div >
                <Droppable droppableId = 'done'>
                  {
                    (provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps} className='tasks'>
                          {
                            doneTasks.map((item, index) => <Card item={item} index={index}/>)
                          }
                      </div>
                    )
                  }

                </Droppable>    
        </div>
      </div>
      </div>
   )
   
   }
         
     {
      showdetails && <Taskdetails task={task}/>
     }
     </>
    )}
    </>
    
      </DragDropContext>
      
    
  )
}
