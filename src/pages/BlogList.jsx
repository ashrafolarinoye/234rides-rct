import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import BlogCard from "../components/BlogCard.jsx";
import { blogPosts } from "../data/blogPosts.js";

export default function BlogList() {
  return (
    <PageTransition>
      <section className="container-px pt-20 pb-16 md:pt-28">
        <Reveal className="max-w-xl">
          <span className="eyebrow">News and updates</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-ink">
            From the road
          </h1>
        </Reveal>
      </section>

      <section className="container-px pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} delay={i * 0.1} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
