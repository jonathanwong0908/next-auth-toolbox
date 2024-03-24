import Navbar from "@/components/core/navbar";
import db from "@/db";
import { users } from "@/db/schema";

export default async function Home() {
  const user = await db.select().from(users);
  console.log(user);

  return (
    <main className="min-h-screen">
      <Navbar />
    </main>
  );
}
