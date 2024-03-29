import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("resetting database");

    await db.delete(schema.users);
    await db.delete(schema.accounts);

    console.log("reset complete");
  } catch (error) {
    console.error(error);
    throw new Error("reset failed");
  }
};

main();
