"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const links = [
  {
    title: "Home",
    href: "#home",
  },
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
    title: "Contact",
    href: "#contact",
  },
];

export default function MenuOverlay() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* Menu Button */}

      <button
        onClick={() => setOpen(true)}
        className="fixed right-6 top-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-xl transition hover:border-[#C7A36A]"
      >
        <Menu className="text-white" size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-[999] bg-[#060606]"
          >
            {/* Close */}

            <button
              onClick={() => setOpen(false)}
              className="absolute right-8 top-8 text-white transition hover:text-[#C7A36A]"
            >
              <X size={36} />
            </button>

            <div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-8 py-20 md:px-16">
              {/* Navigation */}

              <nav className="mt-12">
                {links.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{
                      opacity: 0,
                      x: 60,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.1 * index,
                    }}
                    className="group flex w-fit items-center gap-6 py-3"
                  >
                    <span className="text-sm text-zinc-500">0{index + 1}</span>

                    <span className="font-heading text-5xl text-white transition duration-300 group-hover:translate-x-3 group-hover:text-[#C7A36A] md:text-7xl">
                      {item.title}
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* Bottom */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="flex flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                    Follow Us
                  </p>

                  <div className="mt-5 flex gap-5 text-2xl text-white">
                    <a
                      href="https://www.instagram.com/weddingweek.in"
                      target="_blank"
                      className="transition hover:text-[#C7A36A]"
                    >
                      <FaInstagram />
                    </a>

                    <a
                      href="https://www.facebook.com/share/194cJD8xEM/?mibextid=wwXIfr"
                      target="_blank"
                      className="transition hover:text-[#C7A36A]"
                    >
                      <FaFacebookF />
                    </a>

                    <a
                      href="https://wa.me/919371900066"
                      target="_blank"
                      className="transition hover:text-[#C7A36A]"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                    Wedding Week
                  </p>

                  <p className="mt-2 text-zinc-400">
                    Luxury Fashion • Jewellery • Lifestyle
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
