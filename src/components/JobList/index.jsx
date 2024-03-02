import { Link } from "react-router-dom";

export default function JobList(props) {
  
  const jobs = props.data;
  const boo = jobs.jobProviders;
  console.log(`Boo: ${boo}`);

  
  
  return (
    <>
    
{/* <Link to={`/job/${props.id}`} className="flex w-full mb-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"> */}
<div className="flex w-full mb-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
  <div className="flex flex-col justify-between p-4 leading-normal">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{jobs.title}</h2>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Company: {jobs.company}</p>
      <p>Location: {jobs.location}</p>
      <p>Employment type: {jobs.employmentType}</p>
      <p>Date posted: {jobs.datePosted}</p>
      <p>Salary range: {jobs.salaryRange}</p>
      <div className="more-detail">
        <p>Job description: {jobs.description}</p>
        <h3>Appply here</h3>
        <p>Job providers: {jobs.jobProviders[0].jobProvider}</p>
      </div> 
  </div>
</div>
{/* </Link>  */}
 
    </>

  );
}