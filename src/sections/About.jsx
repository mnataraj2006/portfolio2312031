import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const viewport = { once: true, amount: 0.18 };

const principles = [
  "Ship the smallest complete version.",
  "Make the interface readable before it is decorative.",
  "Treat APIs as product surfaces.",
];

const About = () => (
  <section id="about" className="page-section bg-[#0c0c0d]">
    <div className="section-inner">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-20">
        <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={viewport} className="lg:pt-20">
          <p className="section-kicker">01 / About</p>
          <div className="mt-14 hidden h-[22rem] w-[68%] border border-[var(--line-soft)] lg:block" />
        </motion.div>

        <div>
          <motion.h2 variants={fade} initial="hidden" whileInView="visible" viewport={viewport} className="editorial-title max-w-[900px]">
            I build from the interface inward, then make the system hold.
          </motion.h2>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[1fr_0.72fr] md:items-start">
            <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={viewport} className="space-y-8">
              <p className="quiet-copy text-[var(--ink-soft)]">
                I am a Computer Science Engineering student focused on full stack development,
                backend systems, and product-minded implementation. I like turning ambiguous ideas
                into interfaces with clear hierarchy, reliable data flow, and code that remains easy
                to extend after the first release.
              </p>
              <p className="quiet-copy">
                My work usually sits where UI craft meets system design: React applications, REST
                APIs, authentication, database modeling, dashboards, and deployment workflows.
              </p>
            </motion.div>

            <motion.aside
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="relative border-l border-[var(--line)] pl-6 md:mt-28"
            >
              <p className="mono-label">Working posture</p>
              <div className="mt-7 space-y-6">
                {principles.map((item, index) => (
                  <div key={item} className="grid grid-cols-[2.5rem_1fr] gap-4">
                    <span className="text-xs font-bold text-[var(--ink-faint)]">0{index + 1}</span>
                    <p className="text-sm leading-6 text-[var(--ink-soft)]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>

          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-[var(--line-soft)] bg-[var(--line-soft)] md:grid-cols-4"
          >
            {[
              ["5+", "projects built"],
              ["15+", "technologies"],
              ["300+", "commits"],
            ].map(([value, label]) => (
              <div key={label} className="bg-[#101011] p-6 md:p-7">
                <p className="text-3xl font-bold tracking-[-0.04em] text-[var(--ink)]">{value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-faint)]">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default About;

