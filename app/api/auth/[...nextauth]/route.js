// import NextAuth , { CredentialsSignin } from "next-auth";

// import CredentialsProvider from "next-auth/providers/credentials";
// import Credentials from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import { supabase } from "@/lib/supabase";
// // const supabase = createClient(
// //   process.env.NEXT_PUBLIC_SUPABASE_URL,
// //   process.env.SUPABASE_SERVICE_ROLE_KEY
// // );

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         try {
//           const { email, password } = credentials;

//           if (!email || !password) {
//             throw new Error("Email and password are required");
//           }

//           // Lookup user
//           const { data: user, error } = await supabase
//             .from("users")
//             .select("*")
//             .eq("email", email)
//             .single();

//           if (error) {
//             console.error("Database error:", error.message);
//             return null;
//           }

//           if (!user) {
//             console.error("User not found with email:", email);
//             return null;
//           }

//           // Check if password field exists
//           if (!user.password) {
//             console.error("User found but no password hash stored");
//             return null;
//           }

//           // Compare passwords using bcrypt
//           let isPasswordValid = false;
//           try {
//             isPasswordValid = await bcrypt.compare(password, user.password);
//           } catch (bcryptError) {
//             console.error("Bcrypt comparison error:", bcryptError.message);
//             // If bcrypt fails, maybe password is stored as plaintext (legacy)
//             if (user.password === password) {
//               console.warn("Password stored as plaintext - consider rehashing");
//               isPasswordValid = true;
//             }
//           }
          
//           if (!isPasswordValid) {
//             console.error("Invalid password for user:", email);
//             return null;
//           }

//           return {
//             id: user.id,
//             email: user.email,
//             name: user.name,
//             role: user.role || "user",
//           };
//         } catch (error) {
//           console.error("Authorization error:", error.message);
//           return null;
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//   },
//   jwt: {
//     secret: process.env.NEXTAUTH_SECRET,
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.id = token.id;
//       session.user.role = token.role;
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };



import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { createClient } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { CredentialsSignin } from "next-auth/core/errors";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          throw new CredentialsSignin("Please provide both email and password");
        }

        const { data: user, error } = await supabase
          .from("users")
          .select("*")
          .eq("email", email)
          .single();

        if (error || !user) {
          throw new CredentialsSignin("Invalid email or password");
        }

        // Plain-text password check
        if (user.password !== password) {
          throw new CredentialsSignin("Incorrect password");
        }

        // ✅ Return user object
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role_id: user.role_id,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/auth" },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
