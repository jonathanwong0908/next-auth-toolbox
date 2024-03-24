import db from ".";
import { users } from "./schema";

const main = async () => {
  try {
    await db.delete(users);
  } catch (error) {
    console.error(error);
  }
};

main();
