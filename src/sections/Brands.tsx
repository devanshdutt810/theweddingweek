"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const row1 = [
  {
    name: "Gulabae Jewels",
    image: "/brands/Gulabae1.jpg",
    id: 1,
  },
  {
    name: "Kamal Lakhwani",
    image: "/brands/kamal1.jpg",
    id: 2,
  },
  {
    name: "Needle Art",
    image: "/brands/needleArt1.jpg",
    id: 3,
  },
  {
    name: "Parul Grover",
    image: "/brands/parulGrover1.jpg",
    id: 4,
  },
  {
    name: "Sahiba Grover",
    image: "/brands/sahibaGrover1.jpg",
    id: 5,
  },
];

const row2 = [
  {
    name: "Ekang",
    image: "/brands/ekang.jpg",
    id: 6,
  },
  {
    name: "Parul Grover",
    image: "/brands/parulGrover2.jpg",
    id: 7,
  },
  {
    name: "Sahiba Grover",
    image: "/brands/sahibaGrover2.jpg",
    id: 8,
  },
  {
    name: "Samora",
    image: "/brands/samora1.jpg",
    id: 9,
  },
  {
    name: "Label Monisha",
    image: "/brands/labelmonisha2.jpg",
    id: 10,
  },
];

export default function Brands() {
  return (
    <section id="brands" className="overflow-hidden bg-[#070707] py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <p className="text-xs uppercase tracking-[0.45em] text-[#C7A36A]">
          FEATURED BRANDS
        </p>

        <h2 className="mt-6 font-heading text-5xl text-white md:text-6xl">
          Meet Our Exhibitors
        </h2>

        <p className="mx-auto mt-8 max-w-2xl leading-8 text-zinc-400">
          Explore a curated collection of luxury brands bringing fashion,
          jewellery and lifestyle together.
        </p>
      </motion.div>

      {/* Row 1 */}

      <Marquee speed={95} gradient={false}>
        {row1.map((brand) => (
          <BrandCard key={brand.id} {...brand} />
        ))}
      </Marquee>

      <div className="h-10" />

      {/* Row 2 */}

      <Marquee speed={95} direction="right" gradient={false}>
        {row2.map((brand) => (
          <BrandCard key={brand.id} {...brand} />
        ))}
      </Marquee>
    </section>
  );
}

function BrandCard({ image }: { image: string }) {
  return (
    // <div className="mx-4 w-[320px] md:w-[380px]">

    // </div>
    <div className="overflow-hidden">
      <Image
        src={image}
        alt="Brand"
        width={380}
        height={520}
        className="
            h-[420px]
            w-full
            object-contain
            transition-transform
            duration-700
            hover:scale-105
            p-3
          "
      />
    </div>
  );
}
