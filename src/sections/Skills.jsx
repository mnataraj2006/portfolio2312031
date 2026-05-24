import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaPython, FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiExpress, SiCplusplus,
  SiMongodb, SiMysql, SiPostman,
} from "react-icons/si";
import { FiServer, FiBarChart2 } from "react-icons/fi";
import { skills } from "../data/skills";

const fade = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const viewport = { once: true, amount: 0.1 };

/* ── Category descriptions ── */
const copy = {
  Frontend:    "Interfaces, state, responsive systems, and the browser layer.",
  Backend:     "APIs, auth, server-side structure, and product logic.",
  Programming: "Core languages for problem solving and data work.",
  Database:    "Persistence, query design, and data modeling.",
  Tools:       "Workflow, delivery, containers, and analytics.",
};

/* ── Icon map: name → { icon, color } ── */
const ICON_MAP = {
  // Frontend
  "HTML5":       { Icon: FaHtml5,       color: "rgba(227,  79,  38, 0.7)" },
  "CSS3":        { Icon: FaCss3Alt,     color: "rgba( 38, 77, 228, 0.7)" },
  "JavaScript":  { Icon: SiJavascript,  color: "rgba(247, 223,  30, 0.75)" },
  "React.js":    { Icon: FaReact,       color: "rgba( 97, 218, 251, 0.7)" },
  "Tailwind CSS":{ Icon: SiTailwindcss, color: "rgba( 56, 189, 248, 0.65)" },

  // Backend
  "Node.js":     { Icon: FaNodeJs,      color: "rgba(104, 160,  99, 0.75)" },
  "Express.js":  { Icon: SiExpress,     color: "rgba(200, 200, 200, 0.55)" },
  "REST APIs":   { Icon: FiServer,      color: "rgba(180, 180, 180, 0.55)" },

  // Programming
  "Python":      { Icon: FaPython,      color: "rgba( 55, 118, 171, 0.7)" },
  "C++":         { Icon: SiCplusplus,   color: "rgba( 0, 89, 157, 0.7)" },
  "SQL":         { Icon: FaDatabase,    color: "rgba(180, 180, 180, 0.55)" },

  // Database
  "MongoDB":     { Icon: SiMongodb,     color: "rgba( 71, 162,  72, 0.7)" },
  "MySQL":       { Icon: SiMysql,       color: "rgba( 0, 117, 143, 0.7)" },

  // Tools
  "Git":         { Icon: FaGitAlt,      color: "rgba(240,  80,  50, 0.7)" },
  "Docker":      { Icon: FaDocker,      color: "rgba( 29, 99, 237, 0.65)" },
  "Postman":     { Icon: SiPostman,     color: "rgba(255, 108,  55, 0.7)" },
  "Power BI":    { Icon: FiBarChart2,   color: "rgba(243, 197,   0, 0.7)" },
};

/* ── Single tech chip with icon ── */
const TechChip = ({ name }) => {
  const entry = ICON_MAP[name];

  return (
    <motion.span
      whileHover={{ y: -1, borderColor: "rgba(255,255,255,0.14)" }}
      transition={{ duration: 0.15 }}
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.72rem] font-medium cursor-default select-none"
      style={{
        background: "rgba(255,255,255,0.035)",
        border: "1px solid rgba(255,255,255,0.07)",
        color: "#A1A1AA",
      }}
    >
      {entry ? (
        <entry.Icon
          size={12}
          style={{ color: entry.color, flexShrink: 0 }}
        />
      ) : null}
      {name}
    </motion.span>
  );
};

/* ── Skill category card ── */
const SkillCard = ({ category, items, index }) => (
  <motion.div
    variants={fade}
    className="self-start rounded-2xl p-5 flex flex-col gap-4"
    style={{
      background: "rgba(255,255,255,0.028)",
      border: "1px solid rgba(255,255,255,0.06)",
    }}
    whileHover={{
      y: -2,
      borderColor: "rgba(255,255,255,0.11)",
      transition: { duration: 0.2 },
    }}
  >
    {/* Card header */}
    <div>
      <p
        className="text-[0.58rem] font-bold tracking-[0.18em] uppercase mb-1"
        style={{ color: "#A1A1AA" }}
      >
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3
        className="text-sm font-semibold tracking-tight"
        style={{ color: "#F5F5F5" }}
      >
        {category}
      </h3>
    </div>

    {/* Description */}
    <p className="text-xs leading-[1.7]" style={{ color: "#A1A1AA" }}>
      {copy[category]}
    </p>

    {/* Divider */}
    <div style={{ height: "1px", background: "rgba(255,255,255,0.04)" }} />

    {/* Tech chips with icons */}
    <div className="flex flex-wrap gap-2">
      {items.map((skill) => (
        <TechChip key={skill.name} name={skill.name} />
      ))}
    </div>
  </motion.div>
);

/* ── Section ── */
const Skills = () => {
  const entries = Object.entries(skills);

  return (
    <section
      id="skills"
      className="pt-16 lg:pt-32 overflow-hidden"
      style={{ background: "#090909", paddingBottom: "10rem" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 xl:px-12">

        {/* Header */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-5">
            <span
              className="text-[0.6rem] font-bold tracking-[0.22em] uppercase"
              style={{ color: "#A1A1AA" }}
            >
              02 / Stack
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.05)" }} />
          </div>

          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2
              className="font-bold tracking-[-0.03em] leading-none"
              style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", color: "#F5F5F5" }}
            >
              Technical Stack
            </h2>
            <p
              className="text-sm max-w-xs text-right"
              style={{ color: "#A1A1AA", lineHeight: 1.7 }}
            >
              Tools and technologies I use daily to build production software.
            </p>
          </div>
        </motion.div>

        {/* 3-col natural-height grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 items-start"
        >
          {entries.map(([category, items], index) => (
            <SkillCard
              key={category}
              category={category}
              items={items}
              index={index}
            />
          ))}
        </motion.div>

        {/* All-tech row */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 pt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <span
            className="text-[0.58rem] font-bold tracking-[0.2em] uppercase flex-shrink-0"
            style={{ color: "#A1A1AA" }}
          >
            All tech
          </span>
          {entries.flatMap(([, items]) => items).map((skill) => (
            <span key={skill.name} className="text-xs" style={{ color: "#A1A1AA" }}>
              {skill.name}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
