export const revalidate = 0
// app/admin/requests/page.jsx
// import { createClient } from "@/lib/supabaseServer";
// import { createClient } from "@supabase/supabase-js";
// import { supabase } from "@/lib/supabaseClient";
import { supabase } from "@/lib/supabase";
import "./style.css"
export default async function RequestsTable() {
  // const supabase = createClient();

  // Fetch all requests, sorted newest first
  const { data: requests, error } = await supabase
    .from("requests")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching requests:", error.message);
    return <p className="text-red-500">Failed to load requests.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Visit Requests</h1>

      {requests.length === 0 ? (
        <p className="text-center text-gray-500">No requests yet.</p>
      ) : (
          <div>
            <div className="cards">
          <div className="card">
            <h1 className="card-title">Visits Booked</h1>
            <p className="card-info">{requests.length}</p>
          </div>
          <div className="card">
            <h1 className="card-title">Visits Booked</h1>
            <p className="card-info">{requests.length}</p>
          </div>
          <div className="card">
            <h1 className="card-title">Visits Booked</h1>
            <p className="card-info">{requests.length}</p>
          </div>
        </div>
          <table border="1" cellPadding="8">
          <thead>
            <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Visit Title</th>
               <th>Date</th>
               <th>Time</th>
               <th>Location</th>
               <th>Status</th>
               {/* <th className="p-3 text-center">Action</th> */}
            </tr>
          </thead> 
          <tbody>
            {requests.map((req) => {
              return (
                <tr key={req.id} className="border-t hover:bg-gray-50">
                <td>{req.name}</td>
                <td>{req.email}</td>
                <td>{req.title}</td>
                <td>{req.date}</td>
                <td>{req.time}</td>
                <td>{req.location}</td>
                <td className="p-3 font-semibold text-blue-600">
                  {req.status || "Pending"}
                </td>
                {/* <td className="p-3 text-center">
                  <form action={`/api/admin/requests/${req.id}/accept`} method="post">
                    <button
                      type="submit"
                      id="accept"
                    >
                      Accept
                    </button>
                  </form>
                  <form action={`/api/admin/requests/${req.id}/decline`} method="post">
                    <button
                      type="submit"
                      id="decline"
                    >
                      Decline
                    </button>
                  </form>
                </td> */}
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
