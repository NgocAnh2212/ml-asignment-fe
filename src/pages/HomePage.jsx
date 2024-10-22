import React from 'react'


const HomePage = ({children}) => {
  return (
    <div className="flex w-full h-screen relative" >
      <div className=' flex absolute'>{children}</div>
    </div>
  )
}

export default HomePage