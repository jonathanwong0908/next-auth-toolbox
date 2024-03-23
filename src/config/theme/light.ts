/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  name: "light",
  extend: {
    backgroundColor: {
      background: colors.gray[50],
      primary: colors.gray[900],
    },
    textColor: {
      display: colors.gray[900],
      "primary-foreground": colors.gray[100],
      body: colors.gray[800],
      subdued: colors.gray[500],
      muted: colors.gray[400],
      warning: colors.red[600],
    },
    borderColor: {
      primary: colors.gray[200],
    },
    borderWidth: {
      xs: "0.1px",
    },
  },
};
