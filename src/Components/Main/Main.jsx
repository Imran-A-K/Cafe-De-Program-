import React from 'react'
import Blog from './Blog/Blog'
import Sidebar from './Sidebar/Sidebar'

const Main = () => {
  return (
    < div className='grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 p-5'>
        
        <Blog />    
        <Sidebar />
        
    </div>
  )
}

export default Main