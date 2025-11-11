import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import { supabase } from "@/lib/supabase";
import { supabase } from "@/lib/supabase";

// const SALT_ROUNDS = 10;

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const { data: existingUser } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Hash password
    // const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Insert new user
    const { error } = await supabase.from("users").insert([
      {
        name,
        email,
        password,
        role_id: "0",
      },
    ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "An error occurred during registration" },
      { status: 500 }
    );
  }
}
