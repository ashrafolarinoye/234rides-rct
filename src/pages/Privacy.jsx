import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";

const sections = [
  {
    title: "Information we collect",
    items: [
      "Personal information — name, email, phone number, and payment details provided when creating an account or booking a ride.",
      "Usage information — ride history, location data, device information, and IP address gathered as you use the app.",
      "Cookies and similar technology — used to improve the app experience, understand usage patterns, and personalize content.",
    ],
  },
  {
    title: "How we use it",
    items: [
      "To provide the service — facilitating bookings, processing payments, and keeping the platform running smoothly.",
      "To communicate with you — transactional updates and, where you've opted in, promotional messages.",
      "To analyze and personalize — understanding usage to improve the app and surface relevant recommendations.",
      "To meet legal obligations — including resolving disputes and enforcing our policies.",
    ],
  },
  {
    title: "Sharing and disclosure",
    items: [
      "With trusted service providers who help operate the platform, under confidentiality obligations.",
      "When required by law, or to protect the rights and safety of our users and the public.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "Your choices",
    items: [
      "You can review and update your account information from within the app at any time.",
      "You can opt out of promotional communications while continuing to receive essential service updates.",
      "You can request deletion of your account and associated data by contacting us directly.",
    ],
  },
];

export default function Privacy() {
  return (
    <PageTransition>
      <section className="container-px pt-20 pb-16 md:pt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-ink">
            Privacy policy
          </h1>
          <p className="mt-6 text-lg text-slate">
            At +234 Rides Limited, we're committed to protecting the privacy
            and security of our users' personal information. This page
            outlines what we collect, how we use it, and the choices you
            have.
          </p>
        </Reveal>
      </section>

      <section className="container-px pb-24 space-y-14 max-w-2xl">
        {sections.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <h2 className="text-2xl font-semibold text-ink">{s.title}</h2>
            <ul className="mt-4 space-y-3">
              {s.items.map((item) => (
                <li key={item} className="flex gap-3 text-slate">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-route shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
        <Reveal delay={0.2} className="text-sm text-slate border-t border-white/10 pt-8">
          Questions about this policy? Reach us at{" "}
          <a href="mailto:contact@234rides.com" className="text-route">
            contact@234rides.com
          </a>
          .
        </Reveal>
      </section>
    </PageTransition>
  );
}
