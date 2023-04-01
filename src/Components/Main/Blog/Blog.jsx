import React, { useEffect, useState } from 'react'
import Blog_Card from './Blog_Card/Blog_Card'
import Blog_Qa from './Blog_Qa/Blog_Qa';

const Blog = ({updateReadTime,handleBookMark}) => {
  const [blogDb,setBlogDb] = useState([]);
  useEffect(() =>{
    fetch('jsonData.json')
    .then( response => response.json())
    .then( apiData => setBlogDb(apiData))
  },[]);
  
  return (
    <div className='w-full'>
      {
        blogDb.map( blogData => <Blog_Card key={blogData.id} blogData={blogData} updateReadTime={updateReadTime} handleBookMark={handleBookMark} />)
      }
        <Blog_Qa />
    </div>
  )
}

export default Blog