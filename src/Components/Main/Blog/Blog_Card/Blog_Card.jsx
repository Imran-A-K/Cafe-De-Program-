import React from "react";


const Blog_Card = () => {
  
  return (
    <div className="card w-full bg-base-100 shadow-xl rounded-b-none">
      <figure className="rounded-b-lg">
        <img
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
          alt=""
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              className=" w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
            <div className="flex flex-col">
              <p className="font-semibold">Name Nema</p>
              <p>Mar 13(4 days ago)</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <p>10 min read</p>
<span className="cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>
</span>
          </div>
        </div>
        <h2 className="card-title font-bold pt-5 pb-3 text-3xl">How to utilize Chat-Gpt</h2>
        
        <div className="card-actions ">
          <p className="flex cursor-pointer underline underline-offset-2 text-[#6047EC] font-semibold">Mark as Read</p>
        </div>
      </div>
    </div>
  );
};

export default Blog_Card;
