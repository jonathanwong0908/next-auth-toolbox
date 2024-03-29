import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/lib/auth";

import React from "react";

const SettingsPage = async () => {
  const session = await auth();
  // console.log(session?.user?.role);
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
};

export default SettingsPage;
