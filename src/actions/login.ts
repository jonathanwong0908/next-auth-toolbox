"use server";

import { LoginFormSchemaType } from "@/components/auth/login-form";
import { DEFAULT_LOGIN_REDIRECT } from "@/config/routes";
import { signIn } from "@/lib/auth";
import { LoginSchema } from "@/lib/form-schemas";
import { AuthError } from "next-auth";

export const login = async (values: LoginFormSchemaType) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields?.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }

    throw error;
  }
};
