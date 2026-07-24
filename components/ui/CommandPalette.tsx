"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, User, Code, Briefcase, FileText, Mail, ArrowRight } from "lucide-react";

type Command = {
  id: string;
  title: string;
  icon: React.ReactNode;
  href: string;
};

const commands: Command[] = [
  { id: "home", title: "Home", icon: <Home size={18} />, href: "/" },
  { id: "about", title: "About", icon: <User size={18} />, href: "/#about" },
  { id: "skills", title: "Skills", icon: <Code size={18} />, href: "/#skills" },
  { id: "projects", title: "Projects", icon: <Briefcase size={18} />, href: "/#work" },
  { id: "resume", title: "Resume", icon: <FileText size={18} />, href: "/resume/Bonsa_Adugna_Resume_ML.pdf" },
  { id: "contact", title: "Contact", icon: <Mail size={18} />, href: "/#contact" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Filter commands
  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase())
  );

  // Reset selected index when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  // Handle keyboard navigation
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const selected = filteredCommands[selectedIndex];
        if (selected) {
          router.push(selected.href);
          setIsOpen(false);
          setSearch("");
        }
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, filteredCommands, selectedIndex, router]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-2xl overflow-hidden rounded-2xl border border-line bg-base shadow-2xl pointer-events-auto"
            >
              <div className="flex items-center border-b border-line px-4">
                <Search className="text-ink-faint mr-3" size={20} />
                <input
                  ref={inputRef}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Type a command or search..."
                  aria-label="Search command palette"
                  className="w-full bg-transparent py-5 text-lg text-ink placeholder:text-ink-faint focus:outline-none"
                />
                <div className="flex items-center gap-1 text-[10px] font-mono text-ink-faint bg-base-soft px-2 py-1 rounded">
                  <span>ESC</span>
                </div>
              </div>
              <div className="max-h-[50vh] overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="py-14 text-center text-sm text-ink-secondary">
                    No results found for "{search}"
                  </div>
                ) : (
                  <div className="flex flex-col gap-1">
                    {filteredCommands.map((cmd, index) => (
                      <button
                        key={cmd.id}
                        onMouseEnter={() => setSelectedIndex(index)}
                        onClick={() => {
                          router.push(cmd.href);
                          setIsOpen(false);
                          setSearch("");
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors ${
                          index === selectedIndex
                            ? "bg-accent/10 text-accent"
                            : "text-ink-secondary hover:bg-base-soft"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={index === selectedIndex ? "text-accent" : "text-ink-faint"}>
                            {cmd.icon}
                          </span>
                          <span className="font-medium">{cmd.title}</span>
                        </div>
                        {index === selectedIndex && (
                          <ArrowRight size={16} className="text-accent" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="border-t border-line bg-base-soft px-4 py-3 text-[11px] text-ink-faint flex justify-between items-center font-mono">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <kbd className="bg-base border border-line rounded px-1.5 py-0.5 text-[10px]">↑</kbd>
                    <kbd className="bg-base border border-line rounded px-1.5 py-0.5 text-[10px]">↓</kbd>
                    <span>navigate</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <kbd className="bg-base border border-line rounded px-1.5 py-0.5 text-[10px]">↵</kbd>
                    <span>select</span>
                  </span>
                </div>
                <span>Bonsa Adugna</span>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
