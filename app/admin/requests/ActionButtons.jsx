// "use client";

// import { toast } from "react-toastify";

// export default function ActionButtons({ req }) {
//   const handleAction = async (status) => {
//     const res = await fetch("/api/requests/status", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         id: req.id,
//         status,
//         email: req.email,
//         title: req.title,
//       }),
//     });

//     const data = await res.json();

//     if (data.success) {
//       toast.success(`Request ${status}`);
//       setTimeout(() => window.location.reload(), 800); // refresh table
//     } else {
//       toast.error("Failed: " + data.message);
//     }
//   };

//   return (
//     <div className="space-y-2">
//       <button
//         onClick={() => handleAction("Accepted")}
//         className="bg-green-600 text-white px-3 py-1 rounded"
//       >
//         Accept
//       </button>

//       <button
//         onClick={() => handleAction("Declined")}
//         className="bg-red-600 text-white px-3 py-1 rounded"
//       >
//         Decline
//       </button>
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function ActionButtons({ req }) {
  const [loading, setLoading] = useState(false);

  const handleAction = async (status) => {
    setLoading(true); // disable buttons

    try {
      const res = await fetch("/api/requests/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: req.id,
          status,
          email: req.email,
          title: req.title,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(`Request ${status}`);
        setTimeout(() => window.location.reload(), 800); // refresh table
      } else {
        toast.error("Failed: " + data.message);
        setLoading(false); // re-enable buttons
      }
    } catch (err) {
      toast.error("Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <button
        onClick={() => handleAction("Accepted")}
        className="bg-green-600 text-white px-3 py-1 rounded disabled:opacity-50"
        disabled={loading}
      >
        Accept
      </button>

      <button
        onClick={() => handleAction("Declined")}
        className="bg-red-600 text-white px-3 py-1 rounded disabled:opacity-50"
        disabled={loading}
      >
        Decline
      </button>
    </div>
  );
}
