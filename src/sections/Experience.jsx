import { motion } from "framer-motion";
import { experience } from "../data/experience";

const fade = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
};

const viewport = { once: true, amount: 0.16 };

const Experience = () => (
  <section id="experience" className="page-section bg-[#090909]">
    <div className="section-inner">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.58fr_1.42fr] lg:gap-20">
        <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="section-kicker">04 / Practice</p>
          <h2 className="mt-10 text-5xl font-bold leading-none tracking-[-0.055em] text-[var(--ink)] md:text-7xl lg:max-w-[420px]">
            Experience without the timeline costume.
          </h2>
        </motion.div>

        <div className="space-y-5">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.year}-${item.title}`}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className={`grid grid-cols-1 gap-7 border border-[var(--line-soft)] bg-[#101011] p-7 md:grid-cols-[9rem_1fr] md:p-8 ${index % 2 === 1 ? "lg:ml-16" : "lg:mr-16"}`}
            >
              <div>
                <p className="mono-label">{item.year}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-[-0.04em] text-[var(--ink)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">{item.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tech-badge">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;

