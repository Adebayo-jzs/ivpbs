import { supabase } from "@/lib/supabase";
import "../style.css"
export default async function Attendance(){
    const { data: attendance, error } = await supabase
    .from("attendance")
    .select(`
      attendance_id,
      info:att_id(name),
      created_at,
      student_id,
      trip_id,
      is_present
      
    `)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching requests:", error.message);
    return <>
    <p className="text-red-500">Failed to load requests.</p>
    <button className="text-white bg-[#1cca5b] px-3 py-2 mt-3 rounded">Refresh</button>
    </>;
  }
  return(
    <div>
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
                       <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead> 
                  <tbody>
                    {attendance.map((req) => {
                      return (
                        <tr key={req.attendance_id} className="border-t hover:bg-gray-50">

                        <td>{req.info?.name}</td>
                        {/* <td>{req.student_id}</td>
                        <td>{req.title}</td>
                        <td>{req.date}</td>
                        <td>{req.time}</td>
                        <td>{req.location}</td>  */}
                       
                        
                      </tr>
                      );
                    })}
                  </tbody>
                </table>
        {/* <button className="text-white bg-[#1cca5b] px-3 py-2 mt-3 rounded">Print Attendance</button>
        
        
        {attendance.map((atd) =>{
            return(
                <div key = {atd.attendance_id}> 
                    <p>{atd.student_id}</p>
                </div>
                
                
            );
        })} */}
    </div>
  );
}


