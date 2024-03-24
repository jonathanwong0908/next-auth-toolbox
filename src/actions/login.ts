"use server";

import { LoginFormSchemaType } from "@/components/auth/login-form";
import { LoginSchema } from "@/form-schemas";

export const login = async (values: LoginFormSchemaType) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  return { success: "Email sent!" };
};
