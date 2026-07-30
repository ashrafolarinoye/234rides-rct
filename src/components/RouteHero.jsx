import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const STATUSES = [
  { label: "Finding nearby driver", tone: "text-route" },
  { label: "Driver assigned — Tunde, Corolla · LND 442 XA", tone: "text-signal" },
  { label: "En route to pickup · 3 min away", tone: "text-signal" },
  { label: "Trip in progress · ETA 12 min", tone: "text-route" },
  { label: "Arrived at destination", tone: "text-signal" },
];

/**
 * The page's signature element: a live-looking trip status readout, built
 * from the actual product moment (waiting for a ride) rather than as
 * decoration. A dot travels an animated route line while the status label
 * cycles beneath it, like a booking screen come to life.
 */
export default function RouteHero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStep((s) => (s + 1) % STATUSES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const progress = step / (STATUSES.length - 1);

  return (
    <div className="relative w-full max-w-md">
      <div className="rounded-3xl border border-white/10 bg-asphalt-light/80 backdrop-blur-xl p-6 shadow-2xl shadow-black/40">
        <div className="flex items-center justify-between mb-6">
          <span className="eyebrow">Live trip status</span>
          <span className="flex items-center gap-1.5 font-mono text-xs text-signal">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            online
          </span>
        </div>

        <div className="relative flex items-center justify-between mb-2 px-1">
          <MapPin className="h-5 w-5 text-route shrink-0" />
          <div className="flex-1 mx-3 relative h-[2px]">
            <div className="absolute inset-0 border-t-2 border-dashed border-white/15" />
            <motion.div
              className="absolute inset-y-0 left-0 border-t-2 border-dashed border-route"
              style={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-[7px] h-4 w-4 rounded-full bg-route shadow-[0_0_0_4px_rgba(255,197,61,0.2)]"
              animate={{ left: `${progress * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ marginLeft: -8 }}
            />
          </div>
          <Navigation className="h-5 w-5 text-signal shrink-0" />
        </div>

        <div className="h-10 flex items-center">
          <motion.p
            key={step}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={`font-mono text-sm ${STATUSES[step].tone}`}
          >
            {STATUSES[step].label}
          </motion.p>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate">
          <span>Fare estimate</span>
          <span className="font-mono text-ink">₦2,400 – ₦2,900</span>
        </div>
      </div>

      <motion.div
        className="absolute -z-10 -top-10 -right-10 h-40 w-40 rounded-full bg-route/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
