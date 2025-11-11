"use client";
import { useState } from "react";
// import { supabase } from "@/lib/supabaseClient";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/logo";
import { toast } from "react-toastify";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // const [matric, setMatric] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  // const [message, setMessage] = useState("");
  const router = useRouter();

  const handleAuth = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // 🔐 LOGIN
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) toast.error(res.error);
      else {
        toast.success("Login successful!");
        router.push("/visits");
      }
    } else {
      // 🆕 SIGNUP
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) toast.error(data.error);
      else {
        toast.success(data.message);
        setIsLogin(true);
      }
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4" style={{backgroundColor:"#000000",}}>
      <div className="w-full max-w-md" style={{backgroundColor:"#0d0d0d",border:"1px solid #1f1f1f",borderRadius:"5px", paddingTop:"25px"}}>
        <div className="flex justify-center">
          <Logo size={90} />
        </div>
        <h1 className="text-2xl text-[white] font-bold mb-4 text-center">
          {isLogin ? "Welcome Back!" : "Create Account"}
        </h1>
        <p className="text-2sm text-[white]  mb-4 text-center">
          {isLogin ? "Login to access your account" : "Register to discover industry visits"}
        </p>

      <form onSubmit={handleAuth} className="px-8 pb-8">

        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-3 p-2 rounded"
              required
            />
             
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 rounded"
          required
        />

        <button className="bg-[#1cca5b] text-black p-2 w-full rounded">
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p
          className="text-sm text-center mt-3 text-[#1cca5b] cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
        {/* {message && <p className="mt-2 text-center text-gray-600">{message}</p>} */}
        
      </form>
      </div>
    </div>
  );
}
