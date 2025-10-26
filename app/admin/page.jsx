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

  return (
    <div style={{ maxWidth: "1200px", margin: "40px auto", }}>
      <h1>Admin Dashboard</h1>
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <div className="table-container">
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Organization</th>
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