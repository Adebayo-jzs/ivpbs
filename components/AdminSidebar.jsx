"use client";
import { LayoutDashboardIcon,PanelLeft,FileText,Users,Activity } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  return (
    <aside
      className={`bg-[#000000] text-white px-2 transition-all duration-300 ${
        isOpen ? "w-60" : "w-13"
      }`} style={{borderRight:"1px solid #1f1f1f"}}
    >
      <div className="py-4 px-2  flex justify-between items-center font-bold text-lg" style={{borderBottom:"1px solid #1f1f1f"}}>
        {isOpen && <span>Admin Dashboard</span>}
        <button onClick={() => setIsOpen(!isOpen)}> <PanelLeft size={17} /> </button>
      </div>

      <nav className="mt-1 space-y-1" style={{fontWeight:500,}} >
        <Link href="/admin" className={`block p-2 flex gap-2 items-center  rounded hover:bg-[#121212] ${
            pathname === "/admin"
              ? "border-green-400 bg-[#1a1a1a]   text-[#1cca5b]"
              : "border-transparent"
          }`}>
            <LayoutDashboardIcon  size={17}/>
          {isOpen ? " Overview" :""}
        </Link>

        <Link href="/admin/requests" className={`block p-2 flex gap-2 items-center rounded hover:bg-[#121212] ${
            pathname === "/admin/requests"
              ? "border-green-400 bg-[#1a1a1a]   text-[#1cca5b]"
              : "border-transparent"
          }`}>
            <FileText size={17} />
          {isOpen ? "Request" : ""}
        </Link>

        <Link href="/admin/visits" className={`block p-2 flex gap-2 items-center rounded hover:bg-[#121212] ${
            pathname === "/admin/visits"
              ? "border-green-400 bg-[#1a1a1a]   text-[#1cca5b]"
              : "border-transparent"
          }`}>
            <Activity size={17}/>
          {isOpen ? "Visits" : ""}
        </Link>

        <Link href="/admin/profiles" className={`block p-2 flex gap-2 items-center rounded hover:bg-[#121212] ${
            pathname === "/admin/profiles"
              ? "border-green-400 bg-[#1a1a1a]   text-[#1cca5b]"
              : "border-transparent"
          }`}>
            <Users size={17} />
          {isOpen ? "Users" : ""}
        </Link>
      </nav>
    </aside>
  );
}
