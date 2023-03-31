import React, { useEffect, useState } from 'react'
import Blog_Card from './Blog_Card/Blog_Card'

const Blog = () => {
  const [blogDb,setBlogDb] = useState([]);
  useEffect(() =>{
    fetch('jsonData.json')
    .then( response => response.json())
    .then( apiData => setBlogDb(apiData))
  },[]);
  
  return (
    <div className='w-full'>
      {
        blogDb.map( blogData => <Blog_Card key={blogData.id} blogData={blogData} />)
      }
        
    </div>
  )
}

export default Blog