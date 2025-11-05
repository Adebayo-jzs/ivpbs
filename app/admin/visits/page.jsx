"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import AdminRequestsPage from "../RequestsTable";
export default function AdminVisits() {
  const [visits, setVisits] = useState([]);
  const [form, setForm] = useState({
    title: "",
    industry:"",
    description: "",
    location: "",
    date: "",
    time: "",
  });

  // ✅ Fetch visits from Supabase
  async function getVisits() {
    const { data, error } = await supabase
      .from("visits")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setVisits(data);
  }

  useEffect(() => {
    getVisits();
  }, []);

  // ✅ Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();

    const { data, error } = await supabase
      .from("visits")
      .insert([form])
      .select();

    if (error) {
      console.error(error);
      alert("Failed to add visit");
      return;
    }

    // Update UI without refresh
    setVisits([data[0], ...visits]);

    // Reset form
    setForm({
    
      title: "",
      industry:"",
      description: "",
      location: "",
      date: "",
      time: "",
    });

    alert("Visit added!");
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin – Add Visit</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 shadow rounded max-w-lg space-y-3"
      >
        <input
          type="text"
          placeholder="Visit Title"
          className="border p-2 w-full rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Industry Name"
          className="border p-2 w-full rounded"
          value={form.industry}
          onChange={(e) => setForm({ ...form, industry: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Location"
          className="border p-2 w-full rounded"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          required
        />

        <textarea
          placeholder="Description"
          className="border p-2 w-full rounded"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>

        <input
          type="date"
          placeholder="date (e.g. Monday)"
          className="border p-2 w-full rounded"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Time (e.g. 10:00 AM)"
          className="border p-2 w-full rounded"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          required
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Add Visit
        </button>
      </form>

      <h2 className="text-xl font-bold mt-8 mb-4">Existing Visits</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {visits.map((visit) => (
          <div key={visit.id} className="p-4 bg-white shadow rounded">
            <h3 className="font-semibold">{visit.title}</h3>
            <p className="text-sm text-gray-600">{visit.location}</p>
            <p className="text-sm">{visit.date} – {visit.time}</p>
          </div>
        ))}
      </div>
      <AdminRequestsPage/>
    </div>
  );
}
