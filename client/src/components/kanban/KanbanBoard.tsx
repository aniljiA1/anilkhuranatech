interface KanbanBoardProps {
  applications: any[];
  deleteApplication: (id: string) => void;
}

const KanbanBoard = ({
  applications,
  deleteApplication,
}: KanbanBoardProps) => {
  const columns = ["Applied", "Interview", "Offer", "Rejected"];

  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      {columns.map((status) => (
        <div key={status} className="bg-gray-200 p-4 rounded">
          <h2 className="font-bold mb-3">{status}</h2>

          {applications
            .filter((app) => app.status === status)
            .map((app) => (
              <div
                key={app._id}
                className="bg-white p-3 mb-2 rounded shadow"
              >
                <h3>{app.company}</h3>
                <p>{app.role}</p>

                {/* ✅ DELETE BUTTON */}
                <button
                  onClick={() => deleteApplication(app._id)}
                  className="bg-red-500 text-white px-2 py-1 mt-2 rounded"
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;