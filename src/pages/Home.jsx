import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition.jsx";
import RouteHero from "../components/RouteHero.jsx";
import AppButtons from "../components/AppButtons.jsx";
import FeatureBlock from "../components/FeatureBlock.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import DownloadMarquee from "../components/DownloadMarquee.jsx";
import BlogCard from "../components/BlogCard.jsx";
import Reveal from "../components/Reveal.jsx";
import { blogPosts } from "../data/blogPosts.js";

const features = [
  {
    badge: "Earn with +234 Rides · Driver",
    title: "Hit the road for rewards",
    image: "/images/man_peeking.webp",
    points: [
      "Set your schedule and earn on your terms.",
      "Unlock substantial rewards upon reaching +234 rides.",
      "Join a supportive driver community and access resources.",
    ],
    cta: { label: "Learn more", href: "#" },
  },
  {
    badge: "Earn with +234 Rides · Rider",
    title: "Discover convenience with +234 Rides",
    image: "/images/travel_woman.png",
    points: [
      "Easy, reliable transportation at your fingertips.",
      "Priority on passenger safety with vetted drivers.",
      "Intuitive app for seamless booking and payments.",
    ],
    cta: { label: "Learn more", href: "#" },
    reverse: true,
  },
  {
    badge: "Earn with +234 Rides · Community",
    title: "Join our vibrant community hub",
    image: "/images/hold_phone.jpg",
    points: [
      "Tips and tricks shared by seasoned users and drivers.",
      "A support center for FAQs and immediate assistance.",
      "A direct line to give feedback that shapes the app.",
    ],
    cta: { label: "Join", href: "#" },
  },
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-map bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div className="relative container-px pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Surest link to your destination</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-ink">
              Seamless rides,
              <br />
              <span className="text-route">at your fingertips.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-slate">
              Effortless rides, anytime, anywhere. Swift, safe, and
              stress-free travel with drivers just a tap away.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#book"
                className="rounded-full bg-route px-7 py-3.5 text-sm font-semibold text-asphalt hover:bg-ink transition-colors"
              >
                Book your trip
              </a>
              <AppButtons />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <RouteHero />
          </motion.div>
        </div>
      </section>

      {/* Feature blocks */}
      <section className="container-px">
        {features.map((f, i) => (
          <FeatureBlock key={f.title} index={i + 1} {...f} />
        ))}
      </section>

      <HowItWorks />
      <DownloadMarquee />

      {/* Booking widget */}
      <section id="book" className="container-px py-20 md:py-28 scroll-mt-24">
        <Reveal className="max-w-xl mx-auto text-center">
          <span className="eyebrow">Book a trip</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-ink">
            Where are you headed?
          </h2>
          <p className="mt-3 text-slate">
            Fill in your pickup and drop-off below — a member of our
            dispatch team will confirm your driver.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 max-w-3xl mx-auto rounded-3xl border border-white/10 overflow-hidden bg-asphalt-light">
          <iframe
            src="https://dispatch.allrideapps.net/booking-form/49185300-f991-44b8-b6ed-144d9c561de8"
            title="Book your trip"
            className="w-full h-[420px]"
            style={{ border: "none" }}
          />
        </Reveal>
      </section>

      {/* Blog teaser */}
      <section className="container-px py-20 md:py-28 border-t border-white/10">
        <Reveal className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="eyebrow">News and updates</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-ink">
              From the road
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} delay={i * 0.1} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
