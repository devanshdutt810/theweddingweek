"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MenuOverlay from "@/components/Menu";
import Silk from "@/backgrounds/Silk";
import Button from "@/components/Button";
import { BlurReveal } from "@/components/ui/blur-reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-[#070707]"
    >
      {/* Background */}

      <div className="absolute inset-0">
        <Silk
          speed={8}
          scale={1}
          color="#8b8162"
          noiseIntensity={0}
          rotation={0}
        />
      </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#070707]" />

      {/* Menu */}

      <MenuOverlay />

      {/* Hero */}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-4 -translate-y-20 md:-translate-y-24">
        <div className="mt-10 flex max-w-4xl flex-col items-center text-center">
          {/* Logo */}

          <BlurReveal delay={0.15}>
            <Image
              src="/logo/logo.png"
              alt="The Wedding Week"
              width={340}
              height={340}
              priority
            />
          </BlurReveal>

          {/* Tagline */}

          <BlurReveal delay={0.3}>
            <p className="mt-8 text-xs uppercase tracking-[0.5em] text-[#C7A36A]">
              Luxury Fashion • Jewellery • Lifestyle
            </p>
          </BlurReveal>

          {/* Heading */}

          <BlurReveal delay={0.55}>
            <h1 className="mt-5 font-heading text-4xl leading-none text-white md:text-6xl xl:text-7xl">
              Where Luxury Brands
              <br />
              Meet Their Perfect Audience
            </h1>
          </BlurReveal>

          {/* Description */}

          <BlurReveal delay={0.85}>
            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
              Discover an exclusive exhibition bringing together India&apos;s
              finest fashion, jewellery and lifestyle brands under one elegant
              roof.
            </p>
          </BlurReveal>

          {/* Button */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.15,
              duration: 0.7,
            }}
            className="mt-14"
          >
            <a href="#exhibition">
              <Button>Discover The Event</Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
