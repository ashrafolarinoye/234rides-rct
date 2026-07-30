import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="container-px py-32 text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-ink">
          Looks like this route doesn't exist.
        </h1>
        <p className="mt-4 text-slate">
          Let's get you back on the road.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-route px-7 py-3.5 text-sm font-semibold text-asphalt hover:bg-ink transition-colors"
        >
          Back home
        </Link>
      </section>
    </PageTransition>
  );
}
