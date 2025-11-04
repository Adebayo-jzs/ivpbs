"use client";
import { useState, useEffect } from "react";

export default function orgustriesPage() {
    const [orgs,setorg] = useState([]);
    const fetchData = async () => {
        const res = await fetch("/api/industries");
        const data = await res.json();
        setorg(data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return(
        <>
        <h2 className="text-xl font-semibold mb-2">Existing orgustries</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {orgs.map((s) => (
          <div
            key={s._id}
            className="bg-white shadow p-4 rounded-lg flex flex-col items-center"
          >
            <img
              src={s.logo || "/placeholder.png"}
              alt={s.name}
              className="h-300 w-200 object-contain mb-2"
            />
            <h3 className="font-bold text-lg">{s.name}</h3>
            <p className="text-sm text-gray-500">{s.orgustry}</p>
            <p className="text-xs text-gray-400">{s.location}</p>
          </div>
        ))}
      </div>
        </>
    )
}