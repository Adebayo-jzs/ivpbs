// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { supabase } from "@/lib/supabase";

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
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
//       }
//       return token;
//     },
//     async session({ session, token }) {
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
// });

// export { handler as GET, handler as POST };



import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { supabase } from "@/lib/supabase"; // server-side client

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials || {};

        const { data: user, error } = await supabase
          .from("users")
          .select("*")
          .eq("email", email)
          .single();

        if (error || !user || user.password !== password) {
          throw new Error("Invalid email or password");
        }

        // Return all fields you want in session
        return {
          id: user.id, // must have `id`
          name: user.name,
          email: user.email,
          role_id: user.role_id ?? 0,
        };
      },
    }),
  ],

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
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
