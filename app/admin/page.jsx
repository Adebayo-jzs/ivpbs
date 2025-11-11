export const revalidate = 0
import { supabase } from "@/lib/supabase";
import "./style.css"
export default async function AdminOverview() {
    const { data: profiles } = await supabase
    .from("profiles")
    .select("*");
    const { data: visits } = await supabase
    .from("visits")
    .select("*");
    const { data: requests, error } = await supabase
    .from("requests")
    .select("*");
    if (error || !requests) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Overview</h1>
        <p className="text-center text-gray-500">Overview Unavailale.</p>
      </div>
    );
  }
//   if (error) {
//     console.error("Error fetching requests:", error.message);
//     return <p className="text-red-500">Failed to load requests.</p>;
//   }
  return (
    <div>
      <h1 className="text-3xl text-white font-bold mb-4">Overview</h1>
      {(requests.length === 0 & visits.length === 0 & profiles.length & 0) ? (
        <p className="text-center text-white">Overiew Unavailable.</p>
      ) : (
        
        <div className="cards">
          <div className="card">
            <h1 className="card-title">Total Requests</h1>
            <p className="card-desc">All time requests</p>
            <h1 className="card-info">{requests.length}</h1>
          </div>
          <div className="card">
            <h1 className="card-title">Visits/Events Available</h1>
            <p className="card-desc">Uploaded visits</p>
            <h1 className="card-info">{visits.length}</h1>
          </div>
          <div className="card">
            <h1 className="card-title">User Profiles</h1>
            <p className="card-desc">Registered Users</p>
            <h1 className="card-info">{profiles.length}</h1>
          </div>
        </div>
        )}
    </div>
  );
}
