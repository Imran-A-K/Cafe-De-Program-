import React from 'react'
import Blog_Title_Holder from './Blog_Title_Holder/Blog_Title_Holder'

const Sidebar = ({totalReadTime,bookMarkList}) => {
  return (
    <div className='w-full flex flex-col gap-4 sticky top-0'>
{/* <input className='bg-teal-300 w-full' type="text" value={totalReadTime} disabled /> */}
    <p className='text-center'>Time spent on read: {totalReadTime}</p>
    <div className='flex flex-col gap-4'>
        <p className='text-center'> Total Bookmarks: {bookMarkList.length} </p>
        <div className='flex flex-col gap-2'>
            {
              bookMarkList.map( blog => <Blog_Title_Holder key={blog.id} blogTitle={blog.blog_title} />)
            }
        </div>
    </div>
    </div>
  )
}

export default Sidebar