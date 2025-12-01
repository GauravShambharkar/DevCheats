import { useMemo, useState } from "react";
import { DraftingCompass, HomeIcon, Menu, Sparkles, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const links = useMemo(
    () => [
      {
        label: "Home",
        to: "/",
        icon: <HomeIcon size={15} strokeWidth={1.5} />,
      },
      {
        label: "Explore",
        to: "/explore",
        icon: <DraftingCompass size={15} strokeWidth={1.5} />,
      },
    ],
    []
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderLinks = (className?: string) =>
    links.map((link) => (
      <NavLink
        key={link.label}
        to={link.to}
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          [
            "flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm transition",
            className,
            isActive
              ? "border-amber-400 bg-amber-100 text-amber-900 shadow-inner shadow-amber-600/50"
              : "border-transparent text-white/80 hover:border-white/30 hover:bg-white/10",
          ]
            .filter(Boolean)
            .join(" ")
        }
      >
        {link.icon}
        {link.label}
      </NavLink>
    ));

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 py-4 text-white">
      <div className="flex w-full max-w-6xl items-center justify-between rounded-3xl border border-white/15 bg-[#ffffff13] px-5 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-2">
          <img
            className="w-5"
            src="devCheatsOnlyLogo.svg"
            alt="DevCheats icon"
          />
          <img
            className="w-20 text-white"
            src="devCheatsTextLogo.svg"
            alt="DevCheats logo"
          />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">{renderLinks()}</nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="#"
            className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/80 transition hover:border-white/60"
          >
            Register
          </Link>
          <Link
            to="#"
            className="flex items-center gap-1 rounded-full bg-amber-400 px-4 py-1.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/40 transition hover:-translate-y-0.5"
          >
            <Sparkles size={14} /> Login
          </Link>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/20 text-white md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-x-4 top-24 z-40 rounded-3xl border border-white/15 bg-slate-950/95 p-5 text-white shadow-2xl shadow-black/60 backdrop-blur md:hidden">
          <div className="flex flex-col gap-3">
            <nav className="flex flex-col gap-2">
              {renderLinks("w-full justify-start")}
            </nav>
            <div className="border-t border-white/10 pt-3">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Account
              </p>
              <div className="mt-3 flex flex-col gap-2">
                <Link
                  to="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl border border-white/20 px-4 py-2 text-center text-sm text-white/80 transition hover:border-white/60"
                >
                  Register
                </Link>
                <Link
                  to="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-1 rounded-2xl bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/40"
                >
                  <Sparkles size={14} />
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
