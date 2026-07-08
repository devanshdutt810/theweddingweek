"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function BecomeExhibitor() {
  return (
    <section className="relative overflow-hidden bg-[#070707] py-32">
      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C7A36A]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-4xl px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.45em] text-[#C7A36A]"
        >
          BECOME AN EXHIBITOR
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 font-heading text-5xl leading-tight text-white md:text-6xl"
        >
          Showcase Your Brand
          <br />
          At The Wedding Week
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-zinc-400"
        >
          Join India&apos;s finest fashion, jewellery and lifestyle brands and
          connect with thousands of premium shoppers through an unforgettable
          exhibition experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-14"
        >
          <a href="#contact">
            <Button>Become An Exhibitor</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
