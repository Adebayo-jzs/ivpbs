"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function VisitsPage() {
//   const [visits, setVisits] = useState([]);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
//   const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user }, } = await supabase.auth.getUser();
      setUser(user);
      const { data: { profile }, } = await supabase.auth.getUser();
      setProfile(profile);
    };

    fetchData();
  }, []);

  
  return(
    <>
    {user ? <p>Logged In</p> : <p>Not logged in</p>}
    {/* {profile.admin} */}
    </>
  );
}