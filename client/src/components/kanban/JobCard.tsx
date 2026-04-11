const JobCard = ({ job }: any) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3>{job.company}</h3>
      <p>{job.role}</p>
    </div>
  );
};

export default JobCard;
