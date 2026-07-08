"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import { CalendarDays, MapPin, Clock } from "lucide-react";

const handleClick = () => {
  window.open(
    "https://forms.gle/c24TjVVqJpMSQ9Nk8",
    "_blank",
    "noopener,noreferrer",
  );
};

export default function Exhibition() {
  return (
    <section
      id="exhibition"
      className="relative bg-[#070707] py-32 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-32 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#C7A36A]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-xs uppercase tracking-[0.45em] text-[#C7A36A]">
            UPCOMING EXHIBITION
          </p>

          <h2 className="mt-6 font-heading text-5xl text-white md:text-6xl">
            Delhi Edition
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-zinc-400 leading-8">
            Experience India&apos;s finest collection of fashion, jewellery,
            lifestyle and luxury brands under one elegant roof.
          </p>
        </motion.div>

        {/* Card */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
          overflow-hidden
          rounded-[42px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          "
        >
          <div className="grid lg:grid-cols-2">
            {/* Poster */}

            <div className="relative h-[670px]">
              <Image
                src="/events/poster.jpg"
                alt="Upcoming Exhibition"
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}

            <div className="flex flex-col justify-center p-12 lg:p-16">
              <span className="text-sm uppercase tracking-[0.35em] text-[#C7A36A]">
                The Wedding Week
              </span>

              <h3 className="mt-6 font-heading text-5xl text-white">
                The Uno Edit
              </h3>

              <p className="mt-8 text-zinc-400 leading-8">
                A New Destination For Luxury Weddings.
              </p>

              <div className="mt-12 space-y-8">
                <Info
                  icon={<CalendarDays size={20} />}
                  title="Date"
                  value="25 - 26 July 2026"
                />

                <Info
                  icon={<Clock size={20} />}
                  title="Time"
                  value="11:00 AM - 8:00 PM"
                />

                <Info
                  icon={<MapPin size={20} />}
                  title="Venue"
                  value="Hyatt Regency, Bhikaji Cama Place"
                />
              </div>

              <div className="mt-14">
                <Button onClick={handleClick}>Reserve Your Spot</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-5">
      <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#C7A36A]/10 text-[#C7A36A]">
        {icon}
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          {title}
        </p>

        <h4 className="mt-2 text-lg text-white">{value}</h4>
      </div>
    </div>
  );
}
