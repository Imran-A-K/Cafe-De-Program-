import React from 'react'
import './Header.css'
import user_img from '../../assets/images/user.jpg'

const Header = () => {
  return (
    <nav className='flex flex-col h-[80px] p-5 gap-4 justify-center'>
       <div className='flex justify-between items-center'>
        <h2 className='text-2xl md: text-4xl font-semibold '>Cafe DE Program</h2>
        <img className='rounded-[80px] w-12 h-12' src={user_img} alt="" />
        </div> 
        <hr className='bg-neutral border-2 rounded'/>
    </nav>
  )
}

export default Header