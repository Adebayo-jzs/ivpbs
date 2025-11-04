"use client";
import { useState } from "react";
import './style.css'
export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    date: "",
    nop:"",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setMessage("Form submitted successfully!");
      setFormData({ name: "", email: "", organization: "", date: "" });
    } else {
      setMessage("Error submitting form");
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto" }}>
      <h2>Industrial Visit Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="user@gmail.com"
          required
        />

        {/* Organization dropdown */}
        <select
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          required
        >
          <option value="">Select Organization</option>
          <option value="Dangote Group">Dangote Group</option>
          <option value="Innoson Motors">Innoson Motors</option>
          <option value="Nestlé Nigeria">Nestlé Nigeria</option>
          <option value="MTN Nigeria">MTN Nigeria</option>
          <option value="Nigerian Breweries">Nigerian Breweries</option>
          <option value="Guinness Nigeria">Guinness Nigeria</option>
          <option value="Shell Nigeria">Shell Nigeria</option>
          <option value="Google Nigeria">Google Nigeria</option>
          <option value="Coca-Cola Nigeria">Coca-Cola Nigeria</option>
        </select>
        <input
          type="number"
          name="nop"
          value={formData.nop}
          onChange={handleChange}
          placeholder="Number of people attending"
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}

      
    </div>
  );
}
