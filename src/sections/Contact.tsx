"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/weddingweek.in",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/share/194cJD8xEM/?mibextid=wwXIfr",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/919371900066",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070707] py-32"
    >
      <div className="mx-auto max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.45em] text-[#C7A36A]">
            CONTACT
          </p>

          <h2 className="mt-6 font-heading text-5xl text-white md:text-6xl">
            Let&apos;s Connect
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-zinc-400 leading-8">
            Have a question or want to become an exhibitor? We&apos;d love to
            hear from you.
          </p>
        </motion.div>

        {/* Contact */}

        <div className="mt-20 flex flex-col items-center gap-10">
          <ContactRow
            icon={<MapPin size={18} />}
            title="Location"
            value="New Delhi, India"
          />
          <ContactRow
            icon={<Phone size={18} />}
            title="Phone"
            value="+91-9371900066"
          />

          <ContactRow
            icon={<Mail size={18} />}
            title="Email"
            value="weddingweekofficial@gmail.com"
          />
        </div>

        {/* Socials */}

        <div className="mt-20 flex justify-center gap-6">
          {socials.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#C7A36A]
                hover:bg-[#C7A36A]
                hover:text-black
                "
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C7A36A]/10 text-[#C7A36A]">
        {icon}
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
          {title}
        </p>

        <p className="mt-1 text-lg text-white">{value}</p>
      </div>
    </div>
  );
}
