import React from 'react'
import { Link } from 'react-router-dom';
import {LogoImg} from  "../assets/logo.png";

const TaskBar = () => {
  return (
    <div className="relative w-full h-44 bg-primary-4 py-0">
        <img src={LogoImg} alt="Logo" className='w-44 h-44 '> 
          <Link></Link>
        </img>
    </div>
  )
}

export default TaskBar