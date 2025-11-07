import AdminSidebar from "@/components/AdminSidebar";

export const metadata = {
  title: "Admin Dashboard",
};

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100" style={{backgroundColor:"#000000"}}>
      <AdminSidebar />     {/* ✅ Client Component */}
      <main className="flex-1 p-6 overflow-auto">
        {children}         {/* ✅ Server Components render here */}
      </main>
    </div>
  );
}