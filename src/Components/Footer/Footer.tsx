import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "About", href: "/about", disabled: true },
  { label: "Docs", href: "/docs", disabled: true },
];

const socials = [
  {
    icon: <Twitter size={16} />,
    label: "Twitter",
    href: "https://twitter.com",
  },
  { icon: <Github size={16} />, label: "GitHub", href: "https://github.com" },
  {
    icon: <Linkedin size={16} />,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: <Mail size={16} />,
    label: "Email",
    href: "mailto:hello@devcheats.app",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
              Dev Cheats
            </p>
            <h3 className="text-2xl font-semibold">Guides that ship faster.</h3>
            <p className="text-sm text-slate-400">
              Copyable code, visual file trees, and evergreen steps for React +
              Node topics. Built for engineers who want clarity instead of
              bouncing across tabs.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-2">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Navigate
              </h4>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.disabled ? (
                      <span className="cursor-not-allowed text-white/30">
                        {link.label} (soon)
                      </span>
                    ) : (
                      <Link
                        to={link.href}
                        className="hover:text-white hover:underline"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Follow
              </h4>
              <ul className="mt-3 space-y-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-white/70 transition hover:text-white"
                    >
                      <span className="rounded-full border border-white/20 p-1">
                        {social.icon}
                      </span>
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-4 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} DevCheats. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a className="hover:text-white" href="/privacy">
              Privacy
            </a>
            <a className="hover:text-white" href="/terms">
              Terms
            </a>
            <a className="hover:text-white" href="mailto:hello@devcheats.app">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
