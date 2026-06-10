import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { HiArrowDownTray } from "react-icons/hi2";
import profilePic from "../pic.jpeg";
import { profile } from "../data/profile";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

const Hero = () => (
  <section id="hero" className="relative min-h-[100svh] overflow-hidden pt-28 lg:pt-32">
    <div className="section-inner relative">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid min-h-[calc(100svh-8rem)] grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,0.94fr)_minmax(380px,0.62fr)] lg:gap-8"
      >
        <div className="relative z-10 max-w-[860px]">
          <motion.p variants={fade} className="section-kicker mb-8" style={{ color: "#A1A1AA" }}>
            {profile.role}
          </motion.p>

          <motion.h1 variants={fade} className="display-type">
            {profile.name}
          </motion.h1>

          <motion.div variants={fade} className="mt-9 grid max-w-[720px] grid-cols-1 gap-6 border-l border-[var(--line)] pl-6 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-[500px] text-sm leading-relaxed" style={{ color: "#A1A1AA" }}>
              {profile.shortBio}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link to="projects" smooth duration={650} offset={-72}>
                <button id="hero-view-projects" className="micro-button primary">
                  View work <FiArrowUpRight size={15} />
                </button>
              </Link>
              {profile.resumePath && (
                <a id="hero-download-resume" href={profile.resumePath} download className="micro-button">
                  <HiArrowDownTray size={15} /> Resume
                </a>
              )}
            </div>
          </motion.div>

          <motion.div variants={fade} className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4">
            {[
              { label: "GitHub", href: profile.github, icon: FiGithub },
              { label: "LinkedIn", href: profile.linkedin, icon: FiLinkedin },
              { label: "Email", href: `mailto:${profile.email}`, icon: FiMail },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: "#A1A1AA" }}
                onMouseEnter={e => e.currentTarget.style.color = "#F5F5F5"}
                onMouseLeave={e => e.currentTarget.style.color = "#A1A1AA"}
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center mt-28"
        >
          {/* ── Circular photo placeholder — replace src with your image ── */}
          <div className="relative">
            {/* Outer decorative ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                padding: "2px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.04), rgba(255,255,255,0.12))",
                borderRadius: "50%",
              }}
            />
            {/* Photo circle */}
            <div
              className="relative overflow-hidden"
              style={{
                width: "clamp(240px, 32vw, 380px)",
                height: "clamp(240px, 32vw, 380px)",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "#151515",
              }}
            >
              {/* Fallback — renders BEHIND the photo */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                style={{ background: "#111111" }}
              >
                <span
                  className="font-bold tracking-tight"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#71717A" }}
                >
                  MN
                </span>
                <span
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ color: "#71717A" }}
                >
                  Photo coming soon
                </span>
              </div>
              {/* Photo — z-10 ensures it renders above the fallback */}
              <img
                id="hero-profile-photo"
                src={profilePic}
                alt="M. Nataraj"
                className="absolute inset-0 h-full w-full object-cover object-top z-10"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            {/* Floating availability badge */}
            <div
              className="absolute"
              style={{ bottom: "8%", right: "-8%" }}
            >
              <div
                className="flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full animate-pulse flex-shrink-0"
                  style={{ background: "#A1A1AA" }}
                />
                <span className="text-xs font-medium whitespace-nowrap" style={{ color: "#A1A1AA" }}>
                  {profile.availability}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
