<<<<<<< HEAD
// import AdminSidebar from "@/components/AdminSidebar";
// // import Unauthorised from "../not-authorized";
// import { useState,useEffect } from "react";
// import { redirect } from "next/navigation";
// // import { supabase } from "@/lib/supabase";
// // import Router from "next/router";
// import { getSupabaseServerClient } from "@/lib/supabase/server";
// export const metadata = {
//   title: "Admin Dashboard",
// };
=======
import AdminSidebar from "@/components/AdminSidebar"; 
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
>>>>>>> 3ffad8dda0635fb5f8d47f982b6106f7c49600a7

// export default async function AdminLayout({ children }) {
//   const supabase = getSupabaseServerClient();
//   const [user, setUser] = useState(null);
// // 
//     useEffect(() => {
//       const fetchData = async () => {
//         const { data: { user }, } = await supabase.auth.getUser();
//         setUser(user);
  
//       fetchData();
//     }, []);
//   // Get logged in user
 

//    if (!user) {
//     console.log("Not logged in");
//     // return(
//       // <h1>Login to access this page</h1>
//       // <Unauthorised/>
//     // );
//     redirect("/auth");
//   }

//   // ✅ Fetch profile
//   const { data: profile } = await supabase
//     .from("profiles")
//     .select("role")
//     .eq("id", user.id)
//     .single();

//   if (profile?.role !== "admin") redirect("/not-authorized");

//   return (
//     <div className="flex h-screen bg-gray-100" style={{backgroundColor:"#000000"}}>
//       <AdminSidebar />     {/* ✅ Client Component */}
//       <main className="flex-1 p-6 overflow-auto">
//         {children}         {/* ✅ Server Components render here */}
//       </main>
//     </div>
//   );
// }

// import AdminSidebar from "@/components/AdminSidebar";
// import { redirect } from "next/navigation";
// import { getSupabaseServerClient } from "@/lib/supabase/server";

// export const metadata = {
//   title: "Admin Dashboard",
// };

// export default async function AdminLayout({ children }) {
//   const supabase = getSupabaseServerClient();

//   // ✅ Get user on the server (correct way)
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) {
//     redirect("/auth");
//   }

//   // ✅ Fetch user role
//   const { data: profile } = await supabase
//     .from("profiles")
//     .select("role")
//     .eq("id", user.id)
//     .single();

//   if (profile?.role !== "admin") redirect("/not-authorized");

//   return (
//     <div className="flex h-screen bg-black">
//       <AdminSidebar />
//       <main className="flex-1 p-6 overflow-auto">{children}</main>
//     </div>
//   );
// }




import AdminSidebar from "@/components/AdminSidebar";
 
export const metadata = {
  title: "Admin Dashboard",
};

export default async function AdminLayout({ children }) {
<<<<<<< HEAD
  

=======
  const session = await getServerSession(authOptions);

  if (!session) redirect("/auth");
  if (session.user.role_id !== 1) redirect("/unauthorized");
  console.log(session.user.role_id);
  
>>>>>>> 3ffad8dda0635fb5f8d47f982b6106f7c49600a7
  return (
    <div className="flex h-screen bg-black">
      <AdminSidebar />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
