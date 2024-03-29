"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  href: string;
  label: string;
}

const BackButton = ({ href, label }: Props) => {
  return (
    <div className="grid w-full place-items-center">
      <Link href={href} className="text-sm underline underline-offset-4">
        {label}
      </Link>
    </div>
  );
};

export default BackButton;
