<<<<<<< HEAD
// import NextAuth , { CredentialsSignin } from "next-auth";

// import CredentialsProvider from "next-auth/providers/credentials";
// import Credentials from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import { supabase } from "@/lib/supabase";
// // const supabase = createClient(
// //   process.env.NEXT_PUBLIC_SUPABASE_URL,
// //   process.env.SUPABASE_SERVICE_ROLE_KEY
// // );
=======
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { supabase } from "@/lib/supabase";
>>>>>>> 3ffad8dda0635fb5f8d47f982b6106f7c49600a7

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
<<<<<<< HEAD
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
=======
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const { email, password } = credentials || {};

//         // 🔍 Find user in Supabase public.users
//         const { data: user, error } = await supabase
//           .from("users")
//           .select("*")
//           .eq("email", email)
//           .single();

//         if (error || !user) {
//           throw new Error("Invalid email or password");
//         }

//         // 🔐 Compare plain-text password
//         if (user.password !== password) {
//           throw new Error("Invalid email or password");
//         }

//         // ✅ Return user object (NextAuth will attach this to the session)
//         return {
//           user_id: user.user_id,
//           name: user.name,
//           email: user.email,
//           role_id: user.role_id,
//         };
//       },
//     }),
//   ],

//   // ✅ Use JWT-based session
//   session: { strategy: "jwt" },

//   // ✅ Pass role_id to session
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.role_id = user.role_id;
>>>>>>> 3ffad8dda0635fb5f8d47f982b6106f7c49600a7
//       }
//       return token;
//     },
//     async session({ session, token }) {
<<<<<<< HEAD
//       session.user.id = token.id;
//       session.user.role = token.role;
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
=======
//       if (session.user) {
//         session.user.role_id = token.role_id;
//       }
//       return session;
//     },
//   },

//   // ✅ Redirect to your custom sign-in page
//   pages: {
//     signIn: "/auth",
//   },
>>>>>>> 3ffad8dda0635fb5f8d47f982b6106f7c49600a7
// });

// export { handler as GET, handler as POST };



import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
<<<<<<< HEAD
// import { createClient } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { CredentialsSignin } from "next-auth/core/errors";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );
=======
import { supabase } from "@/lib/supabase"; // server-side client
>>>>>>> 3ffad8dda0635fb5f8d47f982b6106f7c49600a7

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
<<<<<<< HEAD
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          throw new CredentialsSignin("Please provide both email and password");
        }
=======
        const { email, password } = credentials || {};
>>>>>>> 3ffad8dda0635fb5f8d47f982b6106f7c49600a7

        const { data: user, error } = await supabase
          .from("users")
          .select("*")
          .eq("email", email)
          .single();

<<<<<<< HEAD
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
=======
        if (error || !user || user.password !== password) {
          throw new Error("Invalid email or password");
        }

        // Return all fields you want in session
        return {
          id: user.id, // must have `id`
          name: user.name,
          email: user.email,
          role_id: user.role_id ?? 0,
>>>>>>> 3ffad8dda0635fb5f8d47f982b6106f7c49600a7
        };
      },
    }),
  ],
<<<<<<< HEAD
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/auth" },
=======

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      // Only called on sign-in or token refresh
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role_id = user.role_id;
      }
      return token;
    },

    async session({ session, token }) {
      // Copy fields from token to session.user
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.role_id = token.role_id;
      return session;
    },
  },

  pages: {
    signIn: "/auth",
  },
>>>>>>> 3ffad8dda0635fb5f8d47f982b6106f7c49600a7
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
