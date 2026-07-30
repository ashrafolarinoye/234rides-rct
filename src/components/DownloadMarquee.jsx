import AppButtons from "./AppButtons.jsx";
import Reveal from "./Reveal.jsx";

const words = Array(8).fill("Get the app");

export default function DownloadMarquee() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-asphalt">
      <div className="absolute inset-0 bg-grid-map bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

      <div className="relative container-px flex flex-col items-center text-center">
        <Reveal>
          <img
            src="/images/downloadScreen.png"
            alt="+234 Rides app preview"
            className="mx-auto h-[420px] w-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          />
        </Reveal>
        <Reveal delay={0.15} className="mt-8">
          <AppButtons className="justify-center" />
        </Reveal>
      </div>

      <div className="relative mt-20 border-y border-white/10 py-6 -rotate-1 bg-route">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee">
            {[...words, ...words].map((w, i) => (
              <span
                key={i}
                className="mx-6 font-display font-semibold text-2xl md:text-3xl text-asphalt whitespace-nowrap"
              >
                {w} <span className="text-asphalt/40">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
