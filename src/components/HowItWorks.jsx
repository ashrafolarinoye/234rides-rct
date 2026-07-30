import Reveal from "./Reveal.jsx";

const steps = [
  {
    n: "01",
    icon: "/images/howstep1.png",
    title: "Download",
    text: "Get the +234 Rides app on Android or iOS in under a minute.",
  },
  {
    n: "02",
    icon: "/images/howstep2.png",
    title: "Join +234 Rides",
    text: "Create your account, verify your number, and you're in.",
  },
  {
    n: "03",
    icon: "/images/howstep3.png",
    title: "Ride or earn",
    text: "Book a trip in seconds, or switch on driver mode and start earning.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28 bg-asphalt-light">
      <div className="container-px">
        <Reveal className="max-w-xl">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-ink">
            Three steps between you and the road
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12} className="bg-asphalt-light p-8 md:p-10">
              <div className="flex items-center justify-between">
                <img src={s.icon} alt="" className="h-12 w-12 object-contain" />
                <span className="font-mono text-sm text-route/70">{s.n}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-slate">{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14 flex justify-center">
          <a
            href="#book"
            className="rounded-full bg-route px-8 py-3.5 text-sm font-semibold text-asphalt hover:bg-ink transition-colors"
          >
            Get started now
          </a>
        </Reveal>
      </div>
    </section>
  );
}
