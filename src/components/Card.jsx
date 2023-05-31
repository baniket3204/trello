import React from 'react'
import { formatDateToLocaleString, ran } from '../helper/additional'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FiMessageCircle} from 'react-icons/fi'

const Card = ({item}) => {
    // console.log(item);
  return (
<div key={item.id} id="card">
<h3><AiOutlineCheckCircle />  {item.task}</h3>
<div>{item.department}</div>
<img className='avatar-img'  src={localStorage.getItem("profilepic")}></img>
<div><FiMessageCircle /> {ran()}</div>
<h4><AiOutlineCheckCircle />  {item.subtask}</h4>
<h4>{formatDateToLocaleString(item.createdAt)}</h4>
</div> 
  )
}

export default Card