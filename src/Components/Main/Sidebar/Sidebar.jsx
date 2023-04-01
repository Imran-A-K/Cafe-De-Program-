import React from 'react'
import Blog_Title_Holder from './Blog_Title_Holder/Blog_Title_Holder'

const Sidebar = ({totalReadTime,bookMarkList}) => {
  return (
    <div className='w-full flex flex-col gap-4 sticky top-0'>
{/* <input className='bg-teal-300 w-full' type="text" value={totalReadTime} disabled /> */}
    <p className='text-center pt-3 mt-1 rounded-[4px] bg-[#6047EC]/[0.1] h-12 font-semibold text-[#6047EC]'>Spent time on read: {totalReadTime}</p>
    <div className='flex flex-col pt-3 gap-4 bg-[#6047EC]/[0.08]'>
        <p className='text-center  text-2xl font-bold'> Bookmarked Blogs: {bookMarkList.length} </p>
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