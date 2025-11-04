"use client";
import { useState, useEffect } from "react";

export default function AdminIndustries() {
  const [orgs, setOrgs] = useState([]);
  const [form, setForm] = useState({
    name: "",
    industry: "",
    description: "",
    location: "",
    logo: "",
  });

  useEffect(() => {
    fetch("/api/industries")
      .then((res) => res.json())
      .then((data) => setOrgs(data));
  }, []);
  
  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      ...form,
      requirements: form.requirements
        .map((r) => r.trim())
        .filter(Boolean),
    };

    const res = await fetch("/api/industries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const newOrg = await res.json();
      setOrgs([newOrg, ...orgs]);
      setForm({
        name: "",
        industry: "",
        description: "",
        location: "",
        logo: "",
      });
      alert("Organisation added!");
    } else {
      alert("Error adding organisation");
    }
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin — Manage industries</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-xl shadow-md mb-6 grid grid-cols-2 gap-4"
      >
        <input
          type="text"
          placeholder="Organisation Name"
          className="border p-2 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Industry"
          className="border p-2 rounded"
          value={form.industry}
          onChange={(e) => setForm({ ...form, industry: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Location"
          className="border p-2 rounded"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Logo URL"
          className="border p-2 rounded"
          value={form.logo}
          onChange={(e) => setForm({ ...form, logo: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="border p-2 rounded col-span-2"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
         
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded col-span-2"
        >
          Add Organisation
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Existing industries</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {orgs.map((org) => (
          <div
            key={org._id}
            className="bg-white shadow p-4 rounded-lg flex flex-col items-center"
          >
            <img
              src={org.logo || "/placeholder.png"}
              alt={org.name}
              className="h-200 w-300 object-contain mb-2"
            />
            <h3 className="font-bold text-lg">{org.name}</h3>
            <p className="text-sm text-gray-500">{org.industry}</p>
            <p className="text-xs text-gray-400">{org.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
