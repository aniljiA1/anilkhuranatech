import { useNavigate } from "react-router-dom";
import KanbanBoard from "../components/kanban/KanbanBoard";
import JobForm from "../components/forms/JobForm";
import { useApplications } from "../hooks/useApplications";
import { useAuthStore } from "../store/authStore";

const Dashboard = () => {
  const {
    applications,
    createApplication,
    deleteApplication, // ✅ MUST be here
  } = useApplications();

  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="p-5">
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <JobForm onSubmit={createApplication} />

      {/* ✅ PASS deleteApplication HERE */}
      <KanbanBoard
        applications={applications}
        deleteApplication={deleteApplication}
      />
    </div>
  );
};

export default Dashboard;