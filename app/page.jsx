// "use client";
// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabaseClient";

// export default function VisitsPage() {
// //   const [visits, setVisits] = useState([]);
//   const [user, setUser] = useState(null);
//   const [profile, setProfile] = useState(null);
// //   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data: { user }, } = await supabase.auth.getUser();
//       setUser(user);
//       const { data: { profile }, } = await supabase.auth.getUser();
//       setProfile(profile);
//     };

//     fetchData();
//   }, []);

  
//   return(
//     <>
//     {user ? <p>Logged In</p> : <p>Not logged in</p>}
//     {/* {profile.admin} */}
//     </>
//   );
// }


import React from "react";
import "./style.css";

function Homepage() {
return (
<div className="homepage">
<section className="hero">
<h1>Plan and Book <span>Industrial Visits</span> with Ease</h1>
<p>
Connecting students and industries through a seamless online booking experience.
Simplify planning, manage schedules, and make learning outside the classroom easy.
</p>
<button>Get Started</button>
</section>

<section className="about">  
    <h2>About Our Platform</h2>  
    <p>  
      Our Industrial Visit Booking System simplifies planning for educational institutions.  
      Schools and students can browse available industries, submit visit requests,  
      and receive confirmations — all in one place.  
    </p>  
  </section>  

  <section className="features">  
    <h2>Key Features</h2>  
    <div className="feature-list">  
      <div className="card">  
        <h3>🏭 Browse Industries</h3>  
        <p>Explore a wide range of industries open for educational visits.</p>  
      </div>  
      <div className="card">  
        <h3>🗓 Easy Booking</h3>  
        <p>Schedule and manage visits effortlessly with just a few clicks.</p>  
      </div>  
      <div className="card">  
        <h3>✅ Real-Time Updates</h3>  
        <p>Receive instant notifications on booking status and confirmations.</p>  
      </div>  
    </div>  
  </section>  

  <footer>  
    © {new Date().getFullYear()} Industrial Visit Booking Site. All rights reserved.  
  </footer>  
</div>

);
}

export default Homepage;