import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";

const info = [
  {
    icon: Mail,
    label: "Email us",
    lines: ["contact@234rides.com"],
  },
  {
    icon: Phone,
    label: "Call us",
    lines: ["+234 805 080 0675", "+234 805 080 0676", "+234 805 080 0886"],
  },
  {
    icon: MapPin,
    label: "Find us",
    lines: ["Lagos, Nigeria"],
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageTransition>
      <section className="container-px pt-20 pb-16 md:pt-28">
        <Reveal className="max-w-xl">
          <span className="eyebrow">Contact us</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-ink">
            Any query? Let's talk.
          </h1>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {info.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="rounded-3xl border border-white/10 bg-asphalt-light p-6 h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-route/15 text-route">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-mono uppercase tracking-widest text-slate">
                  {item.label}
                </p>
                <div className="mt-1 space-y-0.5">
                  {item.lines.map((l) => (
                    <p key={l} className="text-ink font-medium">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px py-16 md:py-24 border-t border-white/10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
          <Reveal>
            <span className="eyebrow">Message us</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-ink">
              Drop us a message
            </h2>
            <p className="mt-4 text-slate max-w-sm">
              Fill in the form and our team will get back to you soon.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <div className="rounded-3xl border border-signal/30 bg-signal/10 p-10 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-signal/20 text-signal">
                  <Check className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-ink">Message sent</h3>
                <p className="mt-2 text-slate">
                  Thanks for reaching out — we'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                <input
                  required
                  placeholder="Your name"
                  className="sm:col-span-1 rounded-xl bg-asphalt-light border border-white/10 px-4 py-3.5 text-ink placeholder:text-slate/70 focus:border-route outline-none transition-colors"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="sm:col-span-1 rounded-xl bg-asphalt-light border border-white/10 px-4 py-3.5 text-ink placeholder:text-slate/70 focus:border-route outline-none transition-colors"
                />
                <input
                  placeholder="Phone number"
                  className="sm:col-span-2 rounded-xl bg-asphalt-light border border-white/10 px-4 py-3.5 text-ink placeholder:text-slate/70 focus:border-route outline-none transition-colors"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Your message"
                  className="sm:col-span-2 rounded-xl bg-asphalt-light border border-white/10 px-4 py-3.5 text-ink placeholder:text-slate/70 focus:border-route outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-route px-7 py-3.5 text-sm font-semibold text-asphalt hover:bg-ink transition-colors"
                >
                  Send message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
