"use client";
import { useEffect, useState } from "react";
import "./style.css"

export default function AdminPage() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/submit");
      const data = await res.json();
      setSubmissions(data);
    };
    fetchData();
  }, []);
  // const handleAction = async (id, action) => {
  //   const res = await fetch("/api/update-status", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ id, action }),
  //   });
  //   const data = await res.json();
  //   alert(data.message);
  //   fetchData(); // refresh dashboard
  // };
  const name = "unknown";
  return (
    <div style={{ maxWidth: "1200px", margin: "40px auto", }}>
      <div>
      <h1>Admn Dashboard</h1>
      <p>Welcome {name}</p>
      </div>
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <div className="table-container">
        <div className="cards">
          <div className="card">
            <h1 className="card-title">Visits Booked</h1>
            <p className="card-info">{submissions.length}</p>
          </div>
          <div className="card">
            <h1 className="card-title">Visits Booked</h1>
            <p className="card-info">{submissions.length}</p>
          </div>
          <div className="card">
            <h1 className="card-title">Visits Booked</h1>
            <p className="card-info">{submissions.length}</p>
          </div>
        </div>
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Industries</th>
              <th>Trip Date</th>
              <th>Request time</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* <tbody> 
                <tr>
                  <td>Samod Adebayo</td>
                  <td>adedejiade@email.com</td>
                  <td>Dangote</td>
                  <td>27/11/2025</td>
                  <td>2025-10-09 14:51</td>
                  <td>
                    <button id="accept">Accept</button>
                    <button id="decline">Decline</button>
                  </td>
                  
                </tr>
                <tr>
                  <td>Samod</td>
                  <td>ad@email.com</td>
                  <td>Dangote Group </td>
                  <td>27/11/2025</td>
                  <td>2025-10-09 14:51</td>
                  <td>
                    <button id="accept">Accept</button>
                    <button id="decline">Decline</button>
                  </td>
                  
                </tr>
                <tr>
                  <td>Samod</td>
                  <td>ad@email.com</td>
                  <td>Dangote</td>
                  <td>27/11/2025</td>
                  <td>2025-10-09 14:51</td>
                  <td>
                    <button id="accept">Accept</button>
                    <button id="decline">Decline</button>
                  </td>
                  
                </tr>
          </tbody> */}
          <tbody>
            {submissions.map((s, i) => {
              const localTime = new Date(s.createdAt).toLocaleString();
              return (
                <tr key={i}>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.organization}</td>
                  <td>{s.date}</td>
                  <td>{localTime}</td>
                  <td>
                  <button id="accept">Accept</button>
                  <button id="decline">Decline</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
}