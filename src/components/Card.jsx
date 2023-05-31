import React from 'react'
import { formatDateToLocaleString, ran } from '../helper/additional'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FiMessageCircle} from 'react-icons/fi'
import { Draggable } from 'react-beautiful-dnd'

const Card = ({item,  index}) => {
  let colors = {
    'engineering': 'green',
    'research': 'brown',
    'desing': 'purple',
    'data science': 'pink'
  }
    // console.log(item);
  return (
    <Draggable draggableId={item.id.toString()} index = {index}>
        {
            (provided) =>(
<div key={item.id} id="card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
<h3><AiOutlineCheckCircle />  <span>{item.task}</span></h3>
<div style={{backgroundColor: colors[item.department]}} className='card-chip'>{item.department}</div>
<div className='card-details'>
  <div className='avatar-details'>
    <img className='avatar-img'  src={localStorage.getItem("profilepic")}></img>
    <h4>{formatDateToLocaleString(item.createdAt)}</h4>
  </div>
    <div className='avatar-details'><FiMessageCircle /> <span>{ran()}</span></div>
</div>
    <h4><AiOutlineCheckCircle />  <span>{item.subtask}</span></h4>
</div> 
            )
        }
    </Draggable>

  )
}

export default Card