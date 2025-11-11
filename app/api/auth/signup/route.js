import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
// import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password)
      return NextResponse.json({ error: "All fields required" }, { status: 400 });

    // Check if email already exists
    const { data: existing } = await supabase.from("users").select("*").eq("email", email).single();
    if (existing) return NextResponse.json({ error: "Email already registered" }, { status: 400 });

    // Hash password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into Supabase public.users
    const { error: insertError } = await supabase.from("users").insert([
      {
        name,
        email,
        password,
        role_id: 3, // default role
      },
    ]);

    if (insertError)
      return NextResponse.json({ error: insertError.message }, { status: 400 });

    return NextResponse.json({ message: "Signup successful!" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
