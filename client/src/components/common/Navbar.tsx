import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const Navbar = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1>AI Job Tracker</h1>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
