import { Link } from "react-router-dom";
import { useState } from 'react';

export default function JobList(props) {
  
  const jobs = props.data;
  
  return (
    <>
    
      <Link to={`/job-details/${jobs.id}`} state={{jobData: { jobs }}} className="w-full mb-1">
      <div key={jobs.id} className="flex flex-row sm:-flex-row md:-flex-row lg:-flex-row w-full mb-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
        
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{jobs.title}</h2>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Company: {jobs.company}</p>
            <p>Location: {jobs.location}</p>
            <p>Employment type: {jobs.employmentType}</p>
            <p>Date posted: {jobs.datePosted}</p>
            <p>Salary range: {jobs.salaryRange == "" ?  "Competitive" : jobs.salaryRange}</p>
        
      </div>
      </Link>
 
    </>

  );
}