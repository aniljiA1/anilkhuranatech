import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { useAuthStore } from "./store/authStore";

function App() {
  const user = useAuthStore((state) => state.user);

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
      />

      <Route
        path="/login"
        element={user ? <Navigate to="/dashboard" /> : <Login />}
      />

      <Route
        path="/register"
        element={user ? <Navigate to="/dashboard" /> : <Register />}
      />

      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
