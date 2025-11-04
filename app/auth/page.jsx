"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [matric, setMatric] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleAuth = async (e) => {
    e.preventDefault();
    setMessage("");

    if (isLogin) {
      // Login flow
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMessage(error.message);
      else {
        setMessage("Login successful!");
        router.push("/visits"); // 👈 Redirect here
      }
    } else {
      // Signup flow
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) return setMessage(error.message);

      const user = data?.user;
      if (!user) return setMessage("Signup failed, please try again.");

      // Add profile record
      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: user.id,
          name,
          matric_no: matric,
        },
      ]);

      if (profileError) setMessage(profileError.message);
      else setMessage("Signup successful! You can now log in.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleAuth} className="bg-white p-8 shadow rounded w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              className="w-full border mb-3 p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Matric Number"
              onChange={(e) => setMatric(e.target.value)}
              className="w-full border mb-3 p-2 rounded"
              required
            />
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border mb-3 p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border mb-3 p-2 rounded"
          required
        />

        <button className="bg-blue-600 text-white p-2 w-full rounded">
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p
          className="text-sm text-center mt-3 text-blue-500 cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
        {message && <p className="mt-2 text-center text-gray-600">{message}</p>}
      </form>
    </div>
  );
}
