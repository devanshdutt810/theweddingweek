"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Exhibition",
    href: "#exhibition",
  },
  {
    title: "Brands",
    href: "#brands",
  },
  {
    title: "Register",
    href: "#register",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, []);

  return (
    <>
      <motion.header
        initial={{
          y: -60,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="fixed left-0 top-0 z-50 w-full flex justify-center px-6 pt-6"
      >
        <motion.div
          animate={{
            width: scrolled ? "900px" : "980px",
          }}
          transition={{
            duration: 0.35,
          }}
          className="
          hidden
          lg:flex
          items-center
          justify-between
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-3xl
          px-8
          py-4
          shadow-[0_0_60px_rgba(0,0,0,.45)]
          "
        >
          <a href="#">
            <Image
              src="/logo/logo.png"
              alt="logo"
              width={55}
              height={55}
              priority
            />
          </a>

          <nav className="flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="
                text-sm
                text-zinc-300
                transition
                duration-300
                hover:text-[#C7A36A]
                "
              >
                {item.title}
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Mobile */}

        <div
          className="
          lg:hidden
          flex
          items-center
          justify-between
          w-full
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-3xl
          px-5
          py-4
          "
        >
          <Image src="/logo/logo.png" alt="logo" width={45} height={45} />

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-white"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}

      {mobileMenu && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
          }}
          className="
          fixed
          top-24
          left-6
          right-6
          z-40
          rounded-3xl
          border
          border-white/10
          bg-black/90
          backdrop-blur-3xl
          p-8
          lg:hidden
          "
        >
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="
                text-white
                text-lg
                hover:text-[#C7A36A]
                transition
                "
              >
                {item.title}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
}
