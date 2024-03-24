import FadeIn from "@/components/animation/fade-in";
import React from "react";
import Logo from "../logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

const Navbar = () => {
  return (
    <FadeIn>
      <header className="fixed top-4 z-50 grid w-full place-items-center px-4 md:top-6">
        <nav className="border-xs border-primary flex w-full items-center justify-between gap-8 rounded-lg bg-background/90 px-4 py-3 shadow-sm backdrop-blur-lg md:w-full md:max-w-6xl md:gap-16">
          <Logo />
          <div className="flex items-center gap-4">
            <LoginButton>
              <Link href="/auth/sign-in">
                <Button>Login</Button>
              </Link>
            </LoginButton>
          </div>
        </nav>
      </header>
    </FadeIn>
  );
};

export default Navbar;
