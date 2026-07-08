"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070707] py-20 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-1 lg:order-2"
        >
          <div className="absolute inset-0 rounded-[32px] border border-[#C7A36A]/20 md:rounded-[40px]" />

          <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] aspect-[4/5]">
            <Image
              src="/gallery/about.jpg"
              alt="Wedding Week"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <p className="mb-5 text-center text-xs uppercase tracking-[0.45em] text-[#C7A36A] lg:text-left">
            ABOUT THE WEDDING WEEK
          </p>

          <h2 className="text-center font-heading text-4xl leading-tight text-white sm:text-5xl lg:text-left lg:text-6xl">
            Curating Luxury,
            <br />
            Celebrating Style.
          </h2>

          <div className="mx-auto mt-8 h-px w-24 bg-[#C7A36A] lg:mx-0" />

          <p className="mt-8 text-center text-base leading-8 text-zinc-300 md:text-lg md:leading-9 lg:text-left">
            The Wedding Week is an exclusive exhibition platform that brings
            together India&apos;s finest fashion, jewellery, beauty and
            lifestyle brands under one elegant roof.
          </p>

          <p className="mt-6 text-center text-sm leading-7 text-zinc-400 md:text-base md:leading-8 lg:text-left">
            Designed for discerning shoppers and premium exhibitors, every
            edition is thoughtfully curated to showcase exceptional
            craftsmanship, timeless design and unforgettable experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
