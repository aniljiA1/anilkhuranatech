import { useState } from "react";

interface JobFormProps {
  onSubmit: (data: {
    company: string;
    role: string;
    description: string;
    status: string;
  }) => void;
}

const JobForm = ({ onSubmit }: JobFormProps) => {
  const [form, setForm] = useState({
    company: "",
    role: "",
    description: "",
    status: "Applied",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);

    setForm({
      company: "",
      role: "",
      description: "",
      status: "Applied",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      <input
        type="text"
        placeholder="Company"
        className="border p-3 rounded"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />

      <input
        type="text"
        placeholder="Role"
        className="border p-3 rounded"
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      />

      <input
        type="text"
        placeholder="Description"
        className="border p-3 rounded"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <div className="flex gap-2">
        <select
          className="border p-3 rounded w-full"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        <button type="submit" className="bg-purple-500 text-white px-4 rounded">
          Add
        </button>
      </div>
    </form>
  );
};

export default JobForm;
