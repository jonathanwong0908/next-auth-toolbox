"use server";

import { SignUpFormSchemaType } from "@/components/auth/signup-form";
import db from "@/db";
import { users } from "@/db/schema";
import { SignUpSchema } from "@/lib/form-schemas";
import userService from "@/lib/services/user";
import { genSaltSync, hashSync } from "bcrypt-ts";
import { v4 as uuidv4 } from "uuid";

export const signup = async (values: SignUpFormSchemaType) => {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, name } = validatedFields?.data;

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(password, salt);

  const existingUser = await userService?.getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already exists" };
  }

  await db
    .insert(users)
    .values({ id: uuidv4(), email, password: hashedPassword, name });

  return { success: "User created!" };
};
