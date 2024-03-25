import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./lib/form-schemas";
import userService from "./lib/services/user";
import { compare } from "bcrypt-ts";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (!validatedFields.success) return null;

        const { email, password } = validatedFields?.data;
        const user = await userService?.getUserByEmail(email);
        if (!user || !user.password) return null;

        const passwordsMatch = await compare(password, user.password);
        if (passwordsMatch) return { ...user, id: String(user.id) };
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
