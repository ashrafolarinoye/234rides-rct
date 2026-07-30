import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import { team, faqs } from "../data/team.js";

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10 py-5">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <span className="text-lg font-medium text-ink">{q}</span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }}>
          <Plus className="h-5 w-5 text-route shrink-0" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-slate max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function About() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <PageTransition>
      <section className="container-px pt-20 pb-16 md:pt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">About +234 Rides</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-ink leading-tight">
            Built for the way this city actually moves.
          </h1>
          <p className="mt-6 text-lg text-slate">
            +234 Rides Limited has grown into a trusted name in Nigeria's
            transportation space — connecting riders with vetted drivers,
            and drivers with flexible, rewarding work.
          </p>
        </Reveal>
      </section>

      <section className="container-px py-16 border-t border-white/10 grid md:grid-cols-[1fr_2fr] gap-8">
        <Reveal>
          <h2 className="text-2xl font-semibold text-ink">Where we stand today</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-slate text-lg">
            The company has seen significant growth since launch, expanding
            its driver network and refining the booking experience with
            every release. The focus stays the same: a fast, safe, and
            transparent ride from one point in the city to another.
          </p>
        </Reveal>
      </section>

      <section className="container-px py-16 border-t border-white/10">
        <Reveal className="max-w-xl">
          <span className="eyebrow">The team</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-ink">
            Meet the people behind it
          </h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <div className="rounded-3xl border border-white/10 bg-asphalt-light p-6 h-full">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-16 w-16 rounded-full object-cover border-2 border-route/40"
                />
                <h3 className="mt-4 font-semibold text-ink leading-snug">{m.name}</h3>
                <p className="mt-1 text-xs font-mono uppercase tracking-wide text-route">
                  {m.role}
                </p>
                <p className="mt-3 text-sm text-slate">{m.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px py-16 md:py-24 border-t border-white/10">
        <Reveal className="max-w-xl">
          <span className="eyebrow">FAQs</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-ink">
            Frequently asked questions
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 max-w-2xl">
          {faqs.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </section>
    </PageTransition>
  );
}
