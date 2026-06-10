import { motion } from "framer-motion";
import { Youtube } from "lucide-react";

function DiscordIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.3 4.4A17.3 17.3 0 0 0 16 3.1c-.2.4-.4.8-.6 1.2a16 16 0 0 0-4.8 0c-.2-.4-.4-.8-.6-1.2a17.6 17.6 0 0 0-4.3 1.3C3 8.3 2.3 12.1 2.7 15.9a17.4 17.4 0 0 0 5.3 2.7c.4-.6.8-1.2 1.1-1.8-.6-.2-1.2-.5-1.7-.8l.4-.3a12.5 12.5 0 0 0 8.4 0l.4.3c-.5.3-1.1.6-1.7.8.3.6.7 1.2 1.1 1.8a17.4 17.4 0 0 0 5.3-2.7c.5-4.4-.7-8.1-3-11.5ZM9.2 13.6c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm5.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
    </svg>
  );
}

export default function Header() {
  const logoUrl = `${import.meta.env.BASE_URL}Aw3logo.png`;

  return (
    <header className="relative mb-6 overflow-hidden rounded-lg border border-white/10 bg-aw3-surface/70 p-5 shadow-card backdrop-blur-xl">
      <div className="absolute left-8 top-2 h-24 w-56 rounded-full bg-aw3-purple/30 blur-3xl" />
      <div className="absolute right-8 top-0 h-20 w-44 rounded-full bg-aw3-pink/20 blur-3xl" />
      <div className="relative flex flex-col gap-5">
        <div className="z-10 flex w-fit flex-wrap items-center gap-2 self-end md:absolute md:bottom-0 md:right-0">
          <a
            href="https://www.youtube.com/@binelvan"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-md border border-white/10 bg-aw3-surface2 px-4 py-2 text-sm font-black text-white transition duration-300 hover:border-red-400/70 hover:text-red-300"
          >
            <Youtube className="h-5 w-5 text-red-500" />
            @BinElvan
          </a>
          <a
            href="https://discord.gg/MG42fVcm9z"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-md border border-white/10 bg-aw3-surface2 px-4 py-2 text-sm font-black text-white transition duration-300 hover:border-[#5865F2]/80 hover:text-[#AAB2FF]"
          >
            <DiscordIcon className="h-5 w-5 text-[#5865F2]" />
            Discord
          </a>
        </div>
        <div className="flex min-w-0 flex-col">
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.25 }}
            src={logoUrl}
            alt="Anime Warriors 3"
            className="mb-4 h-auto w-52 max-w-full object-contain drop-shadow-[0_0_28px_rgba(168,85,247,0.24)] sm:w-64"
          />
          <h1 className="text-3xl font-black leading-tight tracking-normal text-white sm:text-4xl">
            Secret Calculator
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-aw3-muted sm:text-base">
            Calculate secret and shiny summon rates after applying buffs.
          </p>
        </div>
      </div>
    </header>
  );
}
