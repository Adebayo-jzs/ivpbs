// "use client";
// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabaseClient";

// export default function VisitsPage() {
//   const [visits, setVisits] = useState([]);
//   const [user, setUser] = useState(null);
//   const [message, setMessage] = useState("");

//   // Fetch user + visits
//   useEffect(() => {
//     const fetchData = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//       setUser(user);

//       const { data, error } = await supabase.from("visits").select("*");
//       if (error) console.error("Error fetching visits:", error);
//       else setVisits(data);
//     };

//     fetchData();
//   }, []);

//   const handleBook = async (visit) => {
//     if (!user) return setMessage("You must be logged in to book a visit.");

//     // Get profile info
//     const { data: profile } = await supabase
//       .from("profiles")
//       .select("name, matric_no")
//       .eq("id", user.id)
//       .single();

//     // Create booking request
//     const { error } = await supabase.from("requests").insert([
//       {
//         user_id: user.id,
//         title: visit.title,
//         industry: visit.industry,
//         date: visit.date,
//         time: visit.time,
//         location: visit.location,
//         name: profile?.name,
//         matric_no: profile?.matric_no,
//       },
//     ]);

//     if (error) setMessage(error.message);
//     else setMessage("Visit booked successfully!");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6"> 
//       <h1 className="text-3xl font-bold text-center mb-6">Available Visits</h1>

//       {message && <p className="text-center text-green-600 mb-4">{message}</p>}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {visits.map((visit) => (
//           <div key={visit.id} className="bg-white p-4 shadow rounded">
//             <h2 className="text-xl font-semibold">{visit.title}</h2>
//             <p className="text-gray-600 mt-1">📍 {visit.industry + " - "+visit.location}</p>
//             <p className="text-gray-600">🗓️ {visit.date}</p>
//             <p className="text-gray-600">⏰ {visit.time}</p>
//             <button
//               onClick={() => handleBook(visit)}
//               className="bg-blue-600 text-white px-4 py-2 mt-3 rounded hover:bg-blue-700"
//             >
//               Book Visit
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function VisitsPage() {
  const [visits, setVisits] = useState([]);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("name, matric_no")
          .eq("id", user.id)
          .single();

        if (profileError) console.error(profileError);
        else setProfile(profileData);
      }

      const { data, error } = await supabase.from("visits").select("*");
      if (error) console.error("Error fetching visits:", error);
      else setVisits(data);
    };

    fetchData();
  }, []);

  const handleBook = async (visit) => {
    if (!user) return setMessage("You must be logged in to book a visit.");
    if (!profile) return setMessage("User profile not found.");

    const { error } = await supabase.from("requests").insert([
      {
        user_id: user.id,
        title: visit.title,
        industry: visit.industry,
        date: visit.date,
        time: visit.time,
        location: visit.location,
        name: profile.name,
        matric_no: profile.matric_no,
        email:  user.email,
      },
    ]);

    if (error) setMessage(error.message);
    else setMessage("Visit booked successfully!");
  };

  return (
    <div className="min-h-screen bg-[#000000] p-6">
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-[#1cca5b] text-2xl font-bold text-center mb-2">Available Visits</h1>
        {profile && (
          <p className="text-lg text-white">Welcome, {profile.name} 👋</p>
        )}
      </div>

      {message && <p className="text-center text-green-600 mb-4">{message}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visits.map((visit) => (
          <div key={visit.id} className="bg-[#0d0d0d] p-4 shadow rounded" style={{border:"1px solid #1f1f1f"}}>
            <h2 className="text-xl text-white font-semibold">{visit.title}</h2>
            <p className="text-white mt-1">
              📍 {visit.industry + " - " + visit.location}
            </p>
            <p className="text-white">🗓️ {visit.date}</p>
            <p className="text-white">⏰ {visit.time}</p>
            <button
              onClick={() => handleBook(visit)}
              className="bg-[#1cca5b] text-white px-4 py-2 mt-3 rounded hover:bg-[#1cca5b]-700"
            >
              Book  Visit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
