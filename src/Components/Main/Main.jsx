import React, { useState } from 'react'
import Blog from './Blog/Blog'
import Sidebar from './Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  const [totalReadTime, setTotalReadTime] = useState(0);
  const [bookMarkList, setBookMarkList] = useState([]);

  const handleBookMark = (id,blog_title)=>{
    const exists = bookMarkList.find( blog => blog.id === id);
    if(exists){
      toast("You have already bookmarked this Blog!");
      return
    }
    else{
      const newBookMarkList = [...bookMarkList, {id,blog_title}];
      setBookMarkList([...newBookMarkList]);
    }
    
  }
  const updateReadTime = (currentReadTime) =>{
    const totalTimeToRead = totalReadTime + currentReadTime
    setTotalReadTime(totalTimeToRead)
  }
  return (
    < div className='grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 p-5 '>
        
        <Blog handleBookMark={handleBookMark} updateReadTime={updateReadTime} />    
        <Sidebar bookMarkList={bookMarkList} totalReadTime={totalReadTime} />
        
        <ToastContainer />
        
    </div>
  )
}

export default Main