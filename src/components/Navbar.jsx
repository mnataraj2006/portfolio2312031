import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiArrowDownTray } from "react-icons/hi2";

const navLinks = [
  { label: "Home",           to: "hero" },
  { label: "About",          to: "about" },
  { label: "Skills",         to: "skills" },
  { label: "Projects",       to: "projects" },
  { label: "Experience",     to: "experience" },
  { label: "Certifications", to: "certifications" },
  { label: "Contact",        to: "contact" },
];

const Navbar = () => {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ─── Navbar ─── */}
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(11,11,11,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 xl:px-12 flex items-center justify-between h-[68px]">

          {/* ── Logo ── */}
          <Link to="hero" smooth duration={600} className="cursor-pointer flex-shrink-0">
            <motion.div whileHover={{ opacity: 0.8 }} className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-[6px] flex items-center justify-center font-bold text-white text-[0.65rem] tracking-wider flex-shrink-0"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                MN
              </div>
              <span className="font-semibold text-[0.85rem] tracking-tight text-white/80 hidden sm:block">
                M. Nataraj
              </span>
            </motion.div>
          </Link>

          {/* ── Nav Links — centered ── */}
          <div className="hidden lg:flex items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth duration={600} offset={-68}
                spy
                onSetActive={() => setActiveSection(link.to)}
                className="cursor-pointer"
              >
                <span
                  className="relative px-3.5 py-1.5 text-[0.8rem] font-medium tracking-wide block transition-all duration-200 rounded-md"
                  style={{
                    color: activeSection === link.to ? "#F5F5F5" : "#A1A1AA",
                  }}
                  onMouseEnter={e => { if (activeSection !== link.to) e.currentTarget.style.color = "#A1A1AA"; }}
                  onMouseLeave={e => { if (activeSection !== link.to) e.currentTarget.style.color = "#A1A1AA"; }}
                >
                  {link.label}
                  {activeSection === link.to && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3.5 right-3.5 h-px"
                      style={{ background: "rgba(255,255,255,0.3)" }}
                    />
                  )}
                </span>
              </Link>
            ))}
          </div>

          {/* ── Right: Resume CTA + hamburger ── */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ opacity: 0.8 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 text-[0.78rem] font-medium rounded-[6px] transition-all duration-200"
              style={{
                background: "#1A1A1A",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#A1A1AA",
              }}
            >
              <HiArrowDownTray size={12} />
              Resume
            </motion.a>

            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-1.5 rounded-[6px] transition-colors"
              style={{ color: "#A1A1AA", border: "1px solid rgba(255,255,255,0.07)" }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={18} /> : <HiMenuAlt3 size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ─── Mobile Drawer ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{   opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className="fixed top-[68px] left-0 right-0 z-40 lg:hidden"
            style={{
              background: "rgba(11,11,11,0.96)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={link.to}
                    smooth duration={600} offset={-68}
                    onClick={() => setMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-[6px] text-[0.85rem] font-medium transition-all cursor-pointer"
                    style={{ color: "#A1A1AA" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.04 }}
                href="/resume.pdf"
                download
                className="mt-3 flex items-center gap-2 px-3 py-2.5 text-[0.85rem] font-medium rounded-[6px] transition-all"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#A1A1AA",
                }}
              >
                <HiArrowDownTray size={13} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

