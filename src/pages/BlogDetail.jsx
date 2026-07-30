import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import { blogPosts } from "../data/blogPosts.js";
import NotFound from "./NotFound.jsx";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  return (
    <PageTransition>
      <section className="container-px pt-20 pb-10 md:pt-28">
        <Reveal className="max-w-2xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-slate hover:text-route transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
          <div className="mt-6 flex items-center gap-3 font-mono text-xs text-slate">
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-slate" />
            <span>{post.tag}</span>
          </div>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold text-ink leading-tight">
            {post.title}
          </h1>
        </Reveal>
      </section>

      <Reveal delay={0.1} className="container-px">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[280px] md:h-[420px] object-cover rounded-3xl border border-white/10"
        />
      </Reveal>

      <section className="container-px py-12 md:py-16">
        <div className="max-w-2xl space-y-6">
          {post.body.map((para, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg text-slate leading-relaxed">{para}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
