import React from 'react'

const Blog_Qa = () => {
  return (
    <div className='card w-full bg-base-100 shadow-xl rounded-b-none rounded-t-none p-5'>
        <h1 className='text-center text-2xl pb-2 font-bold'>QA-Blog</h1>
        <h2 className='pb-1 font-bold'>Props vs state?</h2>
        <p className="pb-1">States are built-in React object which is used to store data or details about the component. Whereas Props are a Component’s custom attributes set by the developer in React that are useful for customization. It modifies a component’s behavior or output, which is the reason it can be used as a parameter to customize the application.</p>
        <h2 className='pb-1 font-bold'>How does useState work?</h2>
        <p className="pb-1">The useState() is a Hook in React which allows to have state variables in functional components.It is a special function that takes the initial state as an argument and returns an array of two entries. Where the second entity of the useState can be used to  modify the states values. </p>
        <h2 className='pb-1 font-bold'>Purpose of useEffect other than fetching data.</h2>
        <p className="pb-1"> The useEffect is a hook that allows to perform side effects on the components. Other than fetching API data it can be used to perform various operations. Some of them are:
        retrieving data, direct DOM updates, and timers.
        </p>
        
        <h2 className='pb-1 font-bold'>How Does React work?</h2>
        <p className="pb-1"> React is JavaScript Library created by Facebook.
        It is a popular tool used for building UI components. It creates a Virtual Dom in memory so,  it does all the necessary manipulating there, before making the changes in the browser DOM. It finds out what changes have been made, and changes only what needs to be changed. Which makes it more efficient.</p>


    </div>
  )
}

export default Blog_Qa