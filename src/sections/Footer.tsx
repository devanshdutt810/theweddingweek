"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 py-8 text-sm text-zinc-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Wedding Week. All Rights Reserved by
          Evolve Unlimited.
        </p>

        {/* <p>
          Designed & Developed by{" "}
          <span className="text-[#C7A36A]">Devansh Dutt</span>
        </p> */}
      </div>
    </footer>
  );
}
