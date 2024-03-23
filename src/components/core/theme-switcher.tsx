"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Star } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitcher = ({}: {}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <button
      onClick={handleClick}
      className={`relative flex w-12 rounded-full bg-gradient-to-b p-1 shadow-lg ${
        theme === "light"
          ? "justify-end from-blue-500 to-sky-300"
          : "justify-start from-indigo-600 to-indigo-400"
      }`}
    >
      <Thumb mode={theme} />
      {theme === "light" && <Clouds />}
      {theme === "dark" && <Stars />}
    </button>
  );
};

const Thumb = ({ mode }: { mode: string | undefined }) => {
  return (
    <motion.div
      layout
      transition={{
        duration: 0.75,
        type: "spring",
      }}
      className="relative h-4 w-4 overflow-hidden rounded-full shadow-lg"
    >
      <div
        className={`absolute inset-0 ${
          mode === "dark"
            ? "bg-slate-100"
            : "animate-pulse rounded-full bg-gradient-to-tr from-amber-300 to-yellow-500"
        }`}
      />
      {mode === "light" && <SunCenter />}
      {mode === "dark" && <MoonSpots />}
    </motion.div>
  );
};

const SunCenter = () => (
  <div className="absolute inset-0.5 rounded-full bg-amber-300" />
);

const MoonSpots = () => (
  <>
    <motion.div
      initial={{ x: -4, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.15, duration: 0.35 }}
      className="absolute bottom-0.5 right-0 h-1 w-1 rounded-full bg-slate-300"
    />
    <motion.div
      initial={{ x: -4, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.35 }}
      className="absolute -top-2 left-1 h-3 w-3 rounded-full bg-slate-300"
    />
    <motion.div
      initial={{ x: -4, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.35 }}
      className="absolute right-2 top-2 h-2 w-2 rounded-full bg-slate-300"
    />
  </>
);

const Stars = () => {
  return (
    <>
      <motion.span
        animate={{
          scale: [0.75, 1, 0.75],
          opacity: [0.75, 1, 0.75],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeIn",
        }}
        style={{ rotate: "-12deg" }}
        className="absolute right-3 top-0.5 text-xs text-slate-300"
      >
        <Star strokeWidth={0} fill="white" size={12} />
      </motion.span>
      <motion.span
        animate={{
          scale: [1, 0.75, 1],
          opacity: [0.5, 0.25, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "easeIn",
        }}
        style={{ rotate: "-45deg" }}
        className="absolute right-1 top-3 text-lg text-slate-300"
      >
        <Star strokeWidth={0} fill="white" size={9} />
      </motion.span>
    </>
  );
};

const Clouds = () => {
  return (
    <>
      <motion.span
        animate={{ x: [-6, -3, 0, 3, 6], opacity: [0, 1, 0.75, 1, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 0.25,
        }}
        className="absolute left-1 top-0.5 text-xs text-white"
      >
        <Cloud strokeWidth={0} fill="white" size={9} />
      </motion.span>
      <motion.span
        animate={{ x: [-3, 0, 3, 6, 9], opacity: [0, 1, 0.75, 1, 0] }}
        transition={{
          duration: 12.5,
          repeat: Infinity,
        }}
        className="absolute  left-2 top-3 text-white"
      >
        <Cloud strokeWidth={0} fill="white" size={10} />
      </motion.span>
    </>
  );
};

export default ThemeSwitcher;
