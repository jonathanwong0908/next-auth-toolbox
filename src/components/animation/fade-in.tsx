"use client";

import React, { useRef } from "react";
import { HTMLMotionProps, motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props extends HTMLMotionProps<"div"> {
  once?: boolean;
  delay?: number;
  duration?: number;
}

const FadeIn = ({
  children,
  className,
  once,
  delay,
  duration,
  ...props
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: once || true });

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: duration || 0.6,
        delay: delay || 0,
      },
    },
  };

  return (
    <motion.div
      className={cn("", className)}
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={isInView && "show"}
      exit="hidden"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
