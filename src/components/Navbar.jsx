import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import logo from '../assets/logo.png';

export const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-left'>
      <img src= {logo} id='logo'/>
      <div className='nav-content'>
          <h2>Sprint Plans</h2>
         <div className='nav-options'>
          <div>Overview</div>
          <div>List</div>
          <div>Board</div>
          <div>Timeline</div>
          <div>Calender</div>
          <div>Dashboard</div>
          <div>Messages</div>
          <div>More...</div>
         </div>
      </div>
      </div>
      <div className='right-nav'>
         <img className='avatar-img'  src={localStorage.getItem("profilepic")}></img>
         <div className='input-la'>
         <AiOutlineSearch/>
         <input 
          className='search-bar'
          placeholder = 'Search your query'
         />
         </div>
         
         <AiOutlinePlusCircle className='plus-icn' />
      </div>     
    </div>

  )
}
