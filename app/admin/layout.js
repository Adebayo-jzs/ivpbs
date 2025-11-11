import AdminSidebar from "@/components/AdminSidebar"; 
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Admin Dashboard",
};

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/auth");
  if (session.user.role_id !== 1) redirect("/unauthorized");
  console.log(session.user.role_id);
  
  return (
    <div className="flex h-screen bg-gray-100" style={{backgroundColor:"#000000"}}>
      <AdminSidebar />     {/* ✅ Client Component */}
      <main className="flex-1 p-6 overflow-auto">
        {children}         {/* ✅ Server Components render here */}
      </main>
    </div>
  );
}