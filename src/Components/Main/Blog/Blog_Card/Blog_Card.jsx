import React from "react";


const Blog_Card = ({blogData}) => {

  const { blog_cover_image
, author_image, author_name, blog_title, publish_date, read_time  } = blogData;
  
  return (
    <div className=" card w-full bg-base-100 shadow-xl rounded-b-none rounded-t-none ">
      <figure className="rounded-lg rounded-t-lg pt-1">
        <img className="rounded-t-lg"
          src={blog_cover_image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div className="flex max-[600px]:flex-col items-center gap-2">
            <img
              className="-ml-6 w-12 h-12 rounded-full"
              src={author_image}
              alt=""
            />
            <div className="flex flex-col">
              <p className="max-[600px]:text-xs font-semibold">{author_name}</p>
              <p className="max-[600px]:text-[10px] max-[600px]:font-semibold">{publish_date}</p>
            </div>
          </div>

          <div className="relative flex max-[600px]:flex-col-reverse max-[600px]:gap-5 items-center gap-1">
            <p className="">{read_time < 10 ? `0${read_time}` : read_time} min read</p>
{/* <span className="cursor-pointer max-[600px]:absolute max-[600px]:-top-5 max-[600px]:right-0"> */}
<span className="cursor-pointer max-[600px]:-mr-[60px]">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>
</span>
          </div>
        </div>
        <h2 className="card-title font-bold pt-5 pb-3 text-3xl">{blog_title}</h2>
        
        <div className="card-actions ">
          <p className="flex cursor-pointer underline underline-offset-2 text-[#6047EC] font-semibold">Mark as Read</p>
        </div>
      </div>
    </div>
  );
};

export default Blog_Card;
