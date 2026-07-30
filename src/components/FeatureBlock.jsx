import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

export default function FeatureBlock({
  badge,
  title,
  points,
  image,
  cta,
  reverse = false,
  index,
}) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center py-16 md:py-24 ${
        reverse ? "md:[direction:rtl]" : ""
      }`}
    >
      <Reveal className="[direction:ltr]" delay={0.05}>
        <span className="eyebrow">{badge}</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight text-ink">
          {title}
        </h2>
        <ul className="mt-8 space-y-4">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-route/15 text-route">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="text-slate">{p}</span>
            </li>
          ))}
        </ul>
        {cta && (
          <a
            href={cta.href}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-ink hover:border-route hover:text-route transition-colors"
          >
            {cta.label}
          </a>
        )}
      </Reveal>

      <Reveal delay={0.15} className="[direction:ltr]">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-asphalt-light"
        >
          <span className="absolute top-5 left-5 z-10 font-mono text-xs text-route/80">
            {String(index).padStart(2, "0")}
          </span>
          <img
            src={image}
            alt={title}
            className="w-full h-[340px] md:h-[420px] object-cover"
            loading="lazy"
          />
        </motion.div>
      </Reveal>
    </div>
  );
}
