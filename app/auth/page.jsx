"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    let result;

    if (isLogin) {
      result = await supabase.auth.signInWithPassword({ email, password });
    } else {
      result = await supabase.auth.signUp({ email, password });
    }

    if (result.error) setMessage(result.error.message);
    else setMessage("Check your email for confirmation or login success!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleAuth} className="bg-white p-8 shadow rounded w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

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
