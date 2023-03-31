import React from 'react'

const Blog_Card = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl rounded-b-none">
  <figure className='rounded-b-lg'>
    <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80" alt="" />
    </figure>
  <div className="card-body">
    <div className='flex justify-between items-center'>
    <div className='flex items-center gap-2'>
<img className=' w-12 h-12 rounded-full' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
    <div className='flex flex-col'>
    <p className='font-semibold'>Name Nema</p>
    <p>Mar 13(4 days ago)</p>
    </div>
    </div>
    <div>

    </div>
    </div>
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Blog_Card