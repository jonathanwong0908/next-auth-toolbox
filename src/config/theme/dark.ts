/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  name: "dark",
  extend: {
    backgroundColor: {
      background: colors.gray[950],
      primary: colors.gray[100],
    },
    textColor: {
      display: colors.slate[100],
      "primary-foreground": colors.gray[900],
      body: colors.slate[200],
      subdued: colors.slate[500],
      muted: colors.slate[600],
      warning: colors.red[400],
    },
    borderColor: {
      primary: colors.gray[800],
    },
    borderWidth: {
      xs: "0.1px",
    },
  },
};
