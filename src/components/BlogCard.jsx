import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal.jsx";

export default function BlogCard({ post, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Link
        to={`/blog/${post.slug}`}
        className="group block rounded-3xl overflow-hidden border border-white/10 bg-asphalt-light hover:border-route/40 transition-colors"
      >
        <div className="overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 font-mono text-xs text-slate">
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-slate" />
            <span>{post.tag}</span>
          </div>
          <h3 className="mt-3 text-xl font-semibold text-ink group-hover:text-route transition-colors">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-slate line-clamp-2">{post.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-route">
            Read more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
