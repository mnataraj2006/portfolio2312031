import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { certifications } from "../data/certifications";

const fade = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
};

const viewport = { once: true, amount: 0.15 };

const Certifications = () => (
  <section id="certifications" className="page-section bg-[#0d0d0e]">
    <div className="section-inner">
      <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.35fr] lg:items-start">
        <div>
          <p className="section-kicker">05 / Credentials</p>
          <h2 className="mt-10 max-w-[620px] text-5xl font-bold leading-none tracking-[-0.055em] text-[var(--ink)] md:text-7xl">
            Proof points, kept quiet.
          </h2>
        </div>

        <div className="border-y border-[var(--line-soft)]">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              id={`cert-view-${cert.id}`}
              className="group grid grid-cols-[3.5rem_1fr_auto] items-center gap-5 border-b border-[var(--line-soft)] py-6 last:border-b-0"
            >
              <span className="text-xs font-bold text-[var(--ink-faint)]">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <span className="block text-lg font-bold tracking-[-0.025em] text-[var(--ink-soft)] transition-colors group-hover:text-[var(--ink)]">{cert.title}</span>
                <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-faint)]">{cert.platform} / {cert.date}</span>
              </span>
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ink-faint)] transition-colors group-hover:text-[var(--ink)]"
                  aria-label={`Open ${cert.title}`}
                >
                  <FiArrowUpRight size={17} />
                </a>
              ) : (
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                  Completed
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Certifications;

