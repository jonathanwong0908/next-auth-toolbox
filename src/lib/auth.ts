import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { LoginSchema } from "@/lib/form-schemas";
import db from "@/db";
import authConfig from "@/auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
});
