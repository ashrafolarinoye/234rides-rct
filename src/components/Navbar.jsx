import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About us" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-asphalt/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-px flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="+234 Rides" className="h-8 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  isActive ? "text-asphalt bg-route" : "text-ink/80 hover:text-ink hover:bg-white/5"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://linktr.ee/234rides"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink/90 hover:text-route transition-colors"
          >
            Download app
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#book"
            className="relative inline-flex items-center rounded-full bg-route px-5 py-2.5 text-sm font-semibold text-asphalt overflow-hidden group"
          >
            <span className="relative z-10">Book your trip</span>
            <span className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-asphalt border-b border-white/10"
          >
            <div className="container-px flex flex-col gap-1 py-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-lg text-base font-medium ${
                      isActive ? "bg-route text-asphalt" : "text-ink/85 hover:bg-white/5"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href="https://linktr.ee/234rides"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-3 rounded-lg text-base font-medium text-ink/85 hover:bg-white/5"
              >
                Download app
              </a>
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="mt-2 text-center rounded-full bg-route px-5 py-3 text-base font-semibold text-asphalt"
              >
                Book your trip
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
