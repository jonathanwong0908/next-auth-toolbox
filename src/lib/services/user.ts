import db from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

const userService = {
  getUserByEmail: async (email: string) => {
    try {
      const user = await db.select().from(users).where(eq(users.email, email));
      return user[0];
    } catch (error) {
      return null;
    }
  },
  getUserById: async (id: number) => {
    try {
      const user = await db.select().from(users).where(eq(users.id, id));
      return user[0];
    } catch (error) {
      return null;
    }
  },
};

export default userService;
