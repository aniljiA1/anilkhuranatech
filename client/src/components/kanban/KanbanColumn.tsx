import JobCard from "./JobCard";

const KanbanColumn = ({ title, jobs }: any) => {
  return (
    <div className="bg-gray-100 p-4 rounded w-64">
      <h2 className="font-bold">{title}</h2>

      <div className="space-y-2 mt-4">
        {jobs.map((job: any) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
