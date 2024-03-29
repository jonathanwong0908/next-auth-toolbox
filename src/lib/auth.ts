import NextAuth, { DefaultSession } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { LoginSchema } from "@/lib/form-schemas";
import db from "@/db";
import authConfig from "@/auth.config";
import userService from "./services/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async jwt({ token }) {
      if (!token?.sub) return token;
      const user = await userService?.getUserById(Number(token.sub));
      if (!user) return token;
      token.role = user?.role;
      return token;
    },
    async session({ token, session }) {
      if (token?.sub && session?.user) {
        session.user.id = token.sub;
      }

      if (token?.role && session?.user) {
        session.user.role = token.role as "ADMIN" | "USER";
      }
      return session;
    },
  },
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
