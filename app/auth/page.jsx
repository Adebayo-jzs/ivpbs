// "use client";
// import { useState } from "react";
// import { supabase } from "@/lib/supabaseClient";
// import { useRouter } from "next/navigation";
// import { Logo } from "@/components/logo";
// import { toast } from "react-toastify";

// export default function AuthPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [matric, setMatric] = useState("");
//   const [isLogin, setIsLogin] = useState(true);
//   // const [message, setMessage] = useState("");
//   const router = useRouter();

//   const handleAuth = async (e) => {
//     e.preventDefault();
//     // setMessage("");

//     if (isLogin) {
//       // Login flow
//       const { error } = await supabase.auth.signInWithPassword({ email, password });
//       // if (error) setMessage(error.message);
//       if(error){
//         toast.error(error.message);
//       }
//       else {
//         toast.success("Login successful!");
//         router.push("/visits"); // 👈 Redirect here
//       }
//     } else {
//       // Signup flow
//       const { data, error } = await supabase.auth.signUp({
//         email,
//         password,
//       });

//       // if (error) return setMessage(error.message);
//       if (error) {
//         return toast.error(error.message);
//       }  
//       const user = data?.user;
//       if (!user) return setMessage("Signup failed, please try again.");

//       // Add profile record
//       const { error: profileError } = await supabase.from("profiles").insert([
//         {
//           id: user.id,
//           name,
//           matric_no: matric,
//           role:"user",
//         },
//       ]);

//       if (profileError) {
//         toast.error(profileError.message);
//       } else {
//         toast.success("Signup successful! You can now log in.");
//         // setIsLogin(true); // Optional → automatically show login form
//       }
//       // else setMessage("Signup successful! You can now log in.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background p-4" style={{backgroundColor:"#000000",}}>
//       <div className="w-full max-w-md" style={{backgroundColor:"#0d0d0d",border:"1px solid #1f1f1f",borderRadius:"5px", paddingTop:"25px"}}>
//         <div className="flex justify-center">
//           <Logo size={90} />
//         </div>
//         <h1 className="text-2xl text-[white] font-bold mb-4 text-center">
//           {isLogin ? "Welcome Back!" : "Create Account"}
//         </h1>
//         <p className="text-2sm text-[white]  mb-4 text-center">
//           {isLogin ? "Login to access your account" : "Register to discover industry visits"}
//         </p>

//       <form onSubmit={handleAuth} className="px-8 pb-8">

//         {!isLogin && (
//           <>
//             <input
//               type="text"
//               placeholder="Full Name"
//               onChange={(e) => setName(e.target.value)}
//               className="w-full mb-3 p-2 rounded"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Matric Number"
//               onChange={(e) => setMatric(e.target.value)}
//               className="w-full mb-3 p-2 rounded"
//               required
//             />
//           </>
//         )}

//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full mb-3 p-2 rounded"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full mb-3 p-2 rounded"
//           required
//         />

//         <button className="bg-[#1cca5b] text-black p-2 w-full rounded">
//           {isLogin ? "Login" : "Sign Up"}
//         </button>

//         <p
//           className="text-sm text-center mt-3 text-[#1cca5b] cursor-pointer"
//           onClick={() => setIsLogin(!isLogin)}
//         >
//           {isLogin
//             ? "Don't have an account? Sign Up"
//             : "Already have an account? Login"}
//         </p>
//         {/* {message && <p className="mt-2 text-center text-gray-600">{message}</p>} */}
        
//       </form>
//       </div>
//     </div>
//   );
// }



"use client";
<<<<<<< HEAD
=======
import { useState } from "react";
// import { supabase } from "@/lib/supabaseClient";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
>>>>>>> 3ffad8dda0635fb5f8d47f982b6106f7c49600a7
import { Logo } from "@/components/logo";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
<<<<<<< HEAD
  const [matric, setMatric] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
=======
  // const [matric, setMatric] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  // const [message, setMessage] = useState("");
>>>>>>> 3ffad8dda0635fb5f8d47f982b6106f7c49600a7
  const router = useRouter();

  const handleAuth = async (e) => {
    e.preventDefault();

    if (isLogin) {
<<<<<<< HEAD
=======
      // 🔐 LOGIN
>>>>>>> 3ffad8dda0635fb5f8d47f982b6106f7c49600a7
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
<<<<<<< HEAD
=======

>>>>>>> 3ffad8dda0635fb5f8d47f982b6106f7c49600a7
      if (res?.error) toast.error(res.error);
      else {
        toast.success("Login successful!");
        router.push("/visits");
<<<<<<< HEAD
      }
    } else {
      // Signup: server-side insertion into Supabase
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, matric, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Signup successful! You can now log in.");
        setIsLogin(true);
      } else toast.error(data.error || "Signup failed.");
    }
  };
 return (
=======
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
>>>>>>> 3ffad8dda0635fb5f8d47f982b6106f7c49600a7
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
  // return (
  //   <form onSubmit={handleAuth} className="flex flex-col gap-3">
  //     {!isLogin && (
  //       <>
  //         <input
  //           type="text"
  //           placeholder="Full Name"
  //           value={name}
  //           onChange={(e) => setName(e.target.value)}
  //           required
  //         />
           
  //       </>
  //     )}

  //     <input
  //       type="email"
  //       placeholder="Email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //       required
  //     />
  //     <input
  //       type="password"
  //       placeholder="Password"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //       required
  //     />

  //     <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
  //     <p onClick={() => setIsLogin(!isLogin)}>
  //       {isLogin
  //         ? "Don't have an account? Sign Up"
  //         : "Already have an account? Login"}
  //     </p>
  //   </form>
  // );
}
