"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  className,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        boxShadow:
          variant === "primary"
            ? "0 0 80px rgba(198,168,107,.95),0 0 140px rgba(198,168,107,.55)"
            : "0 0 45px rgba(198,168,107,.45)",
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
      }}
      onClick={onClick}
      className={clsx(
        "group relative overflow-hidden rounded-full px-8 py-4 text-sm md:text-base font-medium tracking-wide transition-all duration-300",
        variant === "primary"
          ? "bg-[#C6A86B] text-black shadow-[0_0_60px_rgba(198,168,107,.65),0_0_120px_rgba(198,168,107,.30)]"
          : "border border-[#C6A86B] text-white shadow-[0_0_30px_rgba(198,168,107,.35)]",
        className,
      )}
    >
      {/* Glow */}

      <div
        className={clsx(
          "absolute inset-0 rounded-full blur-xl transition-opacity duration-500",
          variant === "primary"
            ? "bg-[#C6A86B]/50 opacity-100 group-hover:opacity-100"
            : "bg-[#C6A86B]/20 opacity-60 group-hover:opacity-100",
        )}
      />

      {/* Shine */}

      <motion.div
        initial={{ x: "-120%" }}
        whileHover={{ x: "150%" }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-white/20"
        style={{
          transform: "skewX(-20deg)",
        }}
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
