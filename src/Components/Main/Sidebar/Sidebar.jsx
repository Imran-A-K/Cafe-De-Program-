import React from 'react'
import Blog_Title_Holder from './Blog_Title_Holder/Blog_Title_Holder'

const Sidebar = ({totalReadTime,bookMarkList}) => {
  return (
   <div className=''>
     <div className='w-full flex flex-col gap-4 md:sticky md:top-0'>
    
    <p className='text-center p-3 mt-1 rounded-[4px] bg-[#6047EC]/[0.1] lg:h-12 text-[20px] font-semibold text-[#6047EC] '>Spent time on read: {totalReadTime} min</p>
    <div className='flex flex-col pt-3 pl-3 pr-5 gap-4 bg-[#6047EC]/[0.08] rounded-[4px]'>
        <p className='text-left  text-[20px] font-bold pt-3 pl-3'> Bookmarked Blogs: {bookMarkList.length} </p>
        <div className='flex flex-col gap-2 pb-3'>
            {
              bookMarkList.map( blog => <Blog_Title_Holder key={blog.id} blogTitle={blog.blog_title} />)
            }
        </div>
    </div>
    
    </div>
   </div>
  )
}

export default Sidebar