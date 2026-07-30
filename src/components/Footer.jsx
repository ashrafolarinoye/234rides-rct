import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";
import AppButtons from "./AppButtons.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-asphalt-light">
      <div className="container-px py-16 grid md:grid-cols-2 gap-12">
        <div>
          <img src="/images/logo.png" alt="+234 Rides" className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-slate">
            Surest link to your destination — book a ride or start earning
            across the city, on your terms.
          </p>
          <ul className="mt-6 space-y-1 text-sm">
            <li>
              <a href="mailto:contact@234rides.com" className="text-ink/80 hover:text-route">
                contact@234rides.com
              </a>
            </li>
            <li>
              <a href="tel:+2348050800675" className="text-ink/80 hover:text-route">
                +234 805 080 0675
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-ink/70 hover:border-route hover:text-route transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/about" className="text-ink/80 hover:text-route">About us</Link></li>
              <li><Link to="/contact" className="text-ink/80 hover:text-route">Contact us</Link></li>
              <li><Link to="/blog" className="text-ink/80 hover:text-route">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/privacy-policy" className="text-ink/80 hover:text-route">Privacy policy</Link></li>
              <li><a href="#" className="text-ink/80 hover:text-route">Terms &amp; conditions</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-px py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <AppButtons />
        <div className="text-xs text-slate text-center md:text-right">
          <p>© +234 Rides LTD. Copyrights {new Date().getFullYear()}. All rights reserved.</p>
          <p>BN 7166853</p>
        </div>
      </div>
    </footer>
  );
}
