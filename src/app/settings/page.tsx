import { auth } from "@/lib/auth";

import React from "react";

const SettingsPage = async () => {
  const session = await auth();
  // console.log(session);
  return <div>SettingsPage</div>;
};

export default SettingsPage;
