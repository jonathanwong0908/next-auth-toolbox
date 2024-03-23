import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/core/theme-provider";
import { cn } from "@/lib/utils";
import { instrumentSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Wefs - Website References",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background", instrumentSans.className)}>
        <ThemeProvider
          storageKey="theme"
          attribute="class"
          defaultTheme="light"
          themes={["dark", "light"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
