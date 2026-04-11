import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const LoginForm = () => {
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login(form);
      }}
      className="space-y-4 max-w-md mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold">Login</h2>

      <input
        placeholder="Email"
        className="border p-2 w-full"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Password"
        type="password"
        className="border p-2 w-full"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className="bg-blue-500 text-white p-2 w-full">Login</button>

      <p>
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 underline">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
