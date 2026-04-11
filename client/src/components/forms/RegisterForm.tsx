import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const RegisterForm = () => {
  const { register } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          register(form);
        }}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>

        <input
          placeholder="Name"
          className="border p-3 w-full rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="border p-3 w-full rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Password"
          type="password"
          className="border p-3 w-full rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-green-500 hover:bg-green-600 text-white p-3 w-full rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
